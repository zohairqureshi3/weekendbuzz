import React from "react";
import { Nav, Navbar, NavDropdown, Container, Form, FormControl, Button, Image  } from 'react-bootstrap';

const Header = (props) => {
	return (

		// Header

		<header className="header">
			<Navbar expand="lg" className="navbar-bg">
				<div className="container-width container-fluid">
					<Navbar.Brand href="#">
						<div className="logo">
							<Image src="images/logo.svg" fluid/>
						</div>
					</Navbar.Brand>
					<Navbar.Toggle/>
					<Navbar.Collapse className="header-list">
						<Nav className="my-2 my-lg-0">
							<Nav.Link href="#How To Play">How To Play</Nav.Link>
							<Nav.Link href="#Practice">Practice</Nav.Link>
							<Nav.Link href="#Quiz">Quiz</Nav.Link>
							<Nav.Link href="#FAQs">FAQs</Nav.Link>
							<Nav.Link href="#About Us">About Us</Nav.Link>
							<Nav.Link href="#Contact Us">Contact Us</Nav.Link>
						</Nav>
						<div className="header-buttons">
							<Button className="btn-transparent">Login</Button>
							<Button className="btn-white">Register</Button>
						</div>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</header>
	)
}

export default Header;