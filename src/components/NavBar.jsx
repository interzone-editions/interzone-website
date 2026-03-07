import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "/src/assets/logo.png"
import "./NavBar.css"

function NavBar() {
    const expand = "md"
    return (
        <Navbar collapseOnSelect expand={expand} bg="black" className="mb-4 p-0 border-bottom border-light z-3">
            <Container fluid >
                <Navbar.Brand className='pb-1 p-0'>
                    <Link to="/" className='nav-logo-img'>
                        <img
                            alt="Interzone logo"
                            src={logo}
                            width="53"
                            className="d-inline-block align-top logo-img"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls={`offcanvasNavbar-expand-${expand}`} 
                    className='navbar-dark focus-ring focus-ring-dark border-0 '
                />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="top"
                    className="w-100 h-50"
                >
                    <Offcanvas.Header closeButton className='btn-close-white'/>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 ">
                            <Nav.Link 
                                as={Link}  
                                to="/about" 
                                href='/about'
                                className='link px-2'
                            >
                                ABOUT
                            </Nav.Link>  
                            <Nav.Link 
                                as={Link} 
                                href='/events' 
                                to="/events" 
                                className='link px-2'
                            >
                                EVENTS
                            </Nav.Link>  
<Nav.Link 
                                as={Link} 
                                href='/releases' 
                                to="/releases" 
                                className='link px-2'
                            >
                                releases
                            </Nav.Link>  
                            <Nav.Link 
                                href="https://www.mixcloud.com/n10as/playlists/interzone/" 
                                target="_blank" 
                                className='link px-2'
                            >
                                RADIO
                            </Nav.Link>                                
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavBar;