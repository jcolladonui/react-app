// Header.tsx
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";

const Header2: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Navbar.Brand href="#">
          <FontAwesomeIcon icon={faHome} />
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div style={{ marginLeft: "auto" }}>
          <Nav>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faUser} /> Profile
            </Nav.Link>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faCog} /> Settings
            </Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header2;

//npm install react-bootstrap @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
