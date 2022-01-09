import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container} from 'reactstrap';
import { Link } from 'react-router-dom';

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
                    <Container className="d-flex justify-content-between mx-5 w-100">
                        <NavbarBrand href="/">Mytinerary</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className="px-2">
                                    <Link className="text-white mr-2" to='/'>Home</Link>
                                </NavItem>

                                <NavItem className="">
                                <Link className="text-white px-2" to='/about'>About</Link>
                                </NavItem>

                                <NavItem className="">
                                <Link className="text-white px-2" to='/register'>Register</Link>
                                </NavItem>

                                <NavItem className="">
                                <Link className="text-white px-2" to='/login'>Login</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>

                </Navbar>
            </div>
        )
    }
}

export default AppNavbar; 

