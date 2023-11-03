import Link from "next/link";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const AppHeader = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand >
                    <Link href={"/"} className="navbar-brand">
                        Welcome
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href={"/blogs"} className='nav-link'>
                            Blogs
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;