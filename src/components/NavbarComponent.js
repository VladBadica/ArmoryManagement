import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap/";
import routes from "../constants/routes";

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" expand="false">
            <Container>
                <Navbar.Toggle aria-controls="sidebar" />
                <Navbar.Brand href={routes.HomePage}>My Armory</Navbar.Brand>
                
                <Navbar.Collapse id="basic-navbar-nav">                
                </Navbar.Collapse>
            </Container>
            <Navbar.Offcanvas
                id="sidebar"
            >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>My Armory</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href={routes.HomePage}>Home</Nav.Link>
                    <Nav.Link href={routes.ViewAmmunitionsPage}>View Ammunitions</Nav.Link>     
                    <Nav.Link href={routes.AddAmmunitionsPage}>Add Ammunitions</Nav.Link>   
                    <Nav.Link href={routes.ReloadsPage}>Reloads</Nav.Link>                     
                </Nav>
                
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
}

export default NavbarComponent;