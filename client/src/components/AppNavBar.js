import React, { Component } from "react";
import {
  Button,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";

class AppNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">InsurEasier</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Register</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/insureasier/app">
                    Github
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button color="primary">Add Sample</Button>{" "}
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavBar;