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

const NihNavbar = ({ navbar, pageContext }) => {
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

  return (
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
        style={{ justifyContent: "end", marginTop: "12px", marginRight: "9px" }}
      >
        <Nav>
          {navbar.links.map((navLink, i) => (
            <>
              {navLink.url == "/about" ? (
                <NavDropdown
                  title="About"
                  id="basic-nav-dropdown"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                  }}
                >
                  <NavDropdown.Item
                    href={navLink.url}
                    style={{
                      color: "#007cba",
                      fontSize: "1rem",
                      fontWeight: 700,
                    }}
                  >
                    <FontAwesomeIcon
                      style={{
                        marginRight: "6px",
                      }}
                      icon={faCircleInfo}
                    />
                    {navLink.text}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/data"
                    style={{
                      color: "#007cba",
                      fontSize: "1rem",
                      fontWeight: 700,
                    }}
                  >
                    <FontAwesomeIcon
                      style={{
                        marginRight: "6px",
                      }}
                      icon={faDatabase}
                    />
                    The Data
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Item key={navLink.url}>
                  <Nav.Link
                    style={{
                      color: "#007cba",
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginRight: "8px",
                      whiteSpace: "nowrap",
                      marginLeft: "10px",
                    }}
                    key={navLink.id}
                    href={navLink.url}
                    className={"nav-links"}
                  >
                    <FontAwesomeIcon
                      style={{ marginRight: "6px" }}
                      icon={chooseIcon(i)}
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
  )
}

export default NihNavbar
