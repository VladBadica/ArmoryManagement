import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap/";
import routes from "../constants/routes";
import AuthService from "../services/authService.js";

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" expand="false">
            <Container className="d-flex justify-content-between">
                <Navbar.Toggle aria-controls="sidebar" />
                <Navbar.Brand href={routes.Home}>My Armory</Navbar.Brand>
                <Button variant="secondary" className="mt-0" onClick={AuthService.Logout}>Logout</Button >

                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
            <Navbar.Offcanvas id="sidebar">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Armory</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href={routes.Home}>Home</Nav.Link>
                        <Nav.Link href={routes.ViewAmmunitions}>View Ammunitions</Nav.Link>
                        <Nav.Link href={routes.AddAmmunitions}>Add Ammunitions</Nav.Link>
                        <Nav.Link href={routes.Reloads}>Reloads</Nav.Link>
                    </Nav>

                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
}

export default NavbarComponent;