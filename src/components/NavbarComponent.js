import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap/";

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" expand="false">
            <Container>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                <Navbar.Brand href="#home">My Armory</Navbar.Brand>
                
                <Navbar.Collapse id="basic-navbar-nav">                
                </Navbar.Collapse>
            </Container>
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-false`}
            >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>My Armory</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/viewAmmunitions">View Ammunitions</Nav.Link>     
                    <Nav.Link href="/addAmmunitions">Add Ammunitions</Nav.Link>                 
                </Nav>
                
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
}

export default NavbarComponent;