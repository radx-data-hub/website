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
        return faFlagCheckered
      case 1:
        return faCircleInfo
      case 2:
        return faDatabase
      case 3:
        return faCalendar
      case 4:
        return faBullhorn
      case 5:
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
      <Navbar.Brand
        href="https://radx-hub.nih.gov/home"
        style={{
          padding: "0 !important",
          position: "relative",
          paddingLeft: "5px",
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
            top: "65px",
            left: "104px",
            fontWeight: "bold",
            fontSize: ".8em",
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
        style={{ justifyContent: "end" }}
      >
        <Nav>
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
          {/* <NavDropdown
            title="Dropdown"
            id="basic-nav-dropdown"
            style={{
              color: "#007cba",
              fontSize: "1rem",
              fontWeight: 700,
              marginRight: "8px",
              whiteSpace: "nowrap",
              marginLeft: "10px",
            }}
          >
            <NavDropdown.Item href="#action/3.1">
              <FontAwesomeIcon
                style={{ marginRight: "6px" }}
                icon={chooseIcon(1)}
              />
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
          </NavDropdown> */}
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
              whiteSpace: "nowrap",
              marginLeft: "10px",
              marginRight: "17px",
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
    </Navbar>
  )
}

export default NihNavbar
