import { useState } from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import NextImage from "./image"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouseChimney,
  faRightToBracket,
  faCalendar,
  faBullhorn,
  faClipboardQuestion,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons"

const NihNavbar = ({ navbar, pageContext }) => {
  const chooseIcon = (index) => {
    switch (index) {
      case 0:
        return faCircleInfo
      case 1:
        return faCalendar
      case 2:
        return faBullhorn
      case 3:
        return faClipboardQuestion

      default:
        return faCalendar
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
      expand="lg"
      variant="light"
    >
      <Container>
        <Navbar.Brand
          href="https://radx-hub.nih.gov/home"
          style={{
            padding: "0 !important",
            position: "relative",
          }}
        >
          <Link href="https://radx-hub.nih.gov/home">
            <a>
              <NextImage width="360" height="99" media={navbar.logo} />
            </a>
          </Link>
          <span
            style={{
              display: "inline-block",
              width: "180px",
              color: "#63656a",
              position: "absolute",
              top: "60px",
              left: "100px",
              fontWeight: "bold",
              fontSize: ".8em",
              transform: "skewX(-14deg)",
            }}
          >
            COVID RADx Data Hub
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ justifyContent: "end" }}
        >
          <Nav>
            {navbar.links.map((navLink, i) => (
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
            ))}
            <Nav.Link
              style={{
                color: "#007cba",
                fontSize: "1rem",
                fontWeight: 700,
                marginRight: "8px",
                whiteSpace: "nowrap",
                marginLeft: "10px",
              }}
              href="https://radx-hub.nih.gov/home"
              className={"nav-links"}
            >
              <FontAwesomeIcon
                icon={faHouseChimney}
                style={{ marginRight: "6px" }}
              />
              {"Home"}
            </Nav.Link>
            <Nav.Link
              style={{
                color: "#007cba",
                fontSize: "1rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                marginLeft: "10px",
              }}
              eventKey={2}
              href="https://radx-hub.nih.gov/login"
              className={"nav-links"}
            >
              <FontAwesomeIcon
                style={{ marginRight: "6px" }}
                icon={faRightToBracket}
              />
              {"Login"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NihNavbar