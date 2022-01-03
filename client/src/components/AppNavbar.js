import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

 class AppNavbar extends Component {
     
    state = {
      isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
         
    
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <div className="d-flex justify-content-between mx-5 w-100">
                        <NavbarBrand href="/">Mytinerary</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen}>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href='https://github.com/ncodena/mytinerary1.3'>Github</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>

                </Navbar>
            </div>
        )
    }
}

export default AppNavbar; 

