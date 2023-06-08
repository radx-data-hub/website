import { useState } from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import NextImage from "./image"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouseChimney,
  faRightToBracket,
  faCalendar,
  faBullhorn,
  faClipboardQuestion,
  faCircleInfo,
  faFlagCheckered,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import Head from "next/head"
import { config, dom } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const NihNavbar = ({ navbar, pageContext }) => {
  const router = useRouter()
  const chooseIcon = (index) => {
    switch (index) {
      case 0:
        return faHouseChimney
      case 1:
        return faFlagCheckered
      case 2:
        return faCircleInfo
      case 3:
        return faCalendar
      case 4:
        return faBullhorn
      case 5:
        return faClipboardQuestion
      case 6:
        return faRightToBracket
      default:
        return faRightToBracket
    }
  }

  const active = (url) => {
    const output = router.asPath == url ? " nav-links-util" : ""
    return output
  }

  return (
    <div>
      <Head>
        <style>{dom.css()}</style>
      </Head>
      <Navbar
        style={{
          background: "#fff",
          boxShadow: "0 7px 7px -10px rgba(0,0,0,.6)",
          margin: 0,
          padding: 0,
        }}
        collapseOnSelect
        expand="xl"
        variant="light"
      >
        <Navbar.Brand
          href="https://radx-hub.nih.gov/home"
          style={{
            padding: "0 !important",
            position: "relative",
            paddingLeft: "5px",
            minHeight: "96px",
            maxHeight: "96px",
            minWidth: "380px",
          }}
        >
          <Link href="https://radx-hub.nih.gov/home">
            <a>
              <NextImage width="362" height="99" media={navbar.logo} />
            </a>
          </Link>
          <span
            style={{
              display: "inline-block",
              width: "180px",
              color: "#63656a",
              position: "absolute",
              top: "60px",
              left: "104px",
              fontWeight: "bold",
              fontSize: "16px",
              transform: "skewX(-14deg)",
            }}
          >
            COVID RADx Data Hub
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            marginRight: "16px",
          }}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{
            justifyContent: "end",
            marginTop: "12px",
            marginRight: "9px",
          }}
        >
          <Nav>
            {navbar.links.map((navLink, i) => (
              <>
                {navLink.url == "/about" ? (
                  <NavDropdown
                    title="About"
                    id="basic-nav-dropdown"
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      marginLeft: "10px",
                      marginRight: "8px",
                    }}
                  >
                    <NavDropdown.Item
                      href={navLink.url}
                      style={{
                        color: "#007cba",
                        fontSize: "16px",
                        fontWeight: 700,
                      }}
                    >
                      <FontAwesomeIcon
                        style={{
                          marginRight: "6px",
                        }}
                        icon={faCircleInfo}
                        size="sm"
                      />
                      {navLink.text}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/data"
                      style={{
                        color: "#007cba",
                        fontSize: "16px",
                        fontWeight: 700,
                      }}
                    >
                      <FontAwesomeIcon
                        style={{
                          marginRight: "6px",
                        }}
                        icon={faDatabase}
                        size="sm"
                      />
                      The Data
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Item key={navLink.url}>
                    <Nav.Link
                      style={{
                        color: "#007cba",
                        fontSize: "16px",
                        fontWeight: 700,
                        marginRight: "8px",
                        whiteSpace: "nowrap",
                        marginLeft: "10px",
                      }}
                      key={navLink.id}
                      href={navLink.url}
                      className={"nav-links" + active(navLink.url)}
                    >
                      <FontAwesomeIcon
                        style={{
                          marginRight: "6px",
                        }}
                        icon={chooseIcon(i)}
                        size="sm"
                      />
                      {navLink.text}
                    </Nav.Link>
                  </Nav.Item>
                )}
              </>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NihNavbar
