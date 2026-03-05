import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar as BSNavbar, Offcanvas } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import { COMPANY_INFO } from '../data/experiences';

const Navbar: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <BSNavbar expand="lg" fixed="top" className="navbar-custom bg-white shadow-sm py-2">
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="fw-bold text-success fs-5">
          <img
            src="/images/logo.png"
            alt={COMPANY_INFO.name}
            height="40"
            className="d-inline-block align-top me-2"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <span className="brand-text">Virunga Adventure Tours</span>
        </BSNavbar.Brand>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={handleShow}
          aria-label="Toggle navigation"
        >
          <FiMenu size={24} />
        </button>

        {/* Desktop Navigation */}
        <BSNavbar.Collapse id="main-navbar" className="d-none d-lg-flex">
          <Nav className="ms-auto gap-1">
            <Nav.Link as={NavLink} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/experiences" className="nav-link-custom">
              Experiences
            </Nav.Link>
            <Nav.Link as={NavLink} to="/accommodation" className="nav-link-custom">
              Accommodation
            </Nav.Link>
            <Nav.Link as={NavLink} to="/transport" className="nav-link-custom">
              Transport
            </Nav.Link>
            <Nav.Link as={NavLink} to="/packages" className="nav-link-custom">
              Packages
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>

        {/* Mobile Offcanvas Navigation */}
        <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end" className="d-lg-none">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold text-success">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column gap-2">
              <Nav.Link as={NavLink} to="/" onClick={handleClose} className="fs-5">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/experiences" onClick={handleClose} className="fs-5">
                Experiences
              </Nav.Link>
              <Nav.Link as={NavLink} to="/accommodation" onClick={handleClose} className="fs-5">
                Accommodation
              </Nav.Link>
              <Nav.Link as={NavLink} to="/transport" onClick={handleClose} className="fs-5">
                Transport
              </Nav.Link>
              <Nav.Link as={NavLink} to="/packages" onClick={handleClose} className="fs-5">
                Packages
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={handleClose} className="fs-5">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" onClick={handleClose} className="fs-5">
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
