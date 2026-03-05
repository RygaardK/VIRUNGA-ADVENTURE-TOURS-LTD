import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi';
import { COMPANY_INFO } from '../data/experiences';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <h5 className="fw-bold text-success mb-3">{COMPANY_INFO.name}</h5>
            <p className="text-light opacity-75 small">{COMPANY_INFO.description.slice(0, 200)}...</p>
          </Col>
          <Col lg={2} md={6}>
            <h6 className="fw-bold text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none opacity-75 footer-link">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/experiences"
                  className="text-light text-decoration-none opacity-75 footer-link"
                >
                  Experiences
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none opacity-75 footer-link">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-light text-decoration-none opacity-75 footer-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h6 className="fw-bold text-uppercase mb-3">Top Experiences</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/experiences/gorilla-trekking-bwindi"
                  className="text-light text-decoration-none opacity-75 footer-link"
                >
                  Gorilla Trekking
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/experiences/volcano-hiking-mgahinga"
                  className="text-light text-decoration-none opacity-75 footer-link"
                >
                  Volcano Hiking
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/experiences/golden-monkey-tracking"
                  className="text-light text-decoration-none opacity-75 footer-link"
                >
                  Golden Monkey Tracking
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/experiences/canoeing-boat-tour-lake-mutanda"
                  className="text-light text-decoration-none opacity-75 footer-link"
                >
                  Lake Mutanda Tours
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h6 className="fw-bold text-uppercase mb-3">Contact Us</h6>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start gap-2 small opacity-75">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2 small opacity-75">
                <FiPhone className="flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-light text-decoration-none">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2 small opacity-75">
                <FiMail className="flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-light text-decoration-none">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
            <div className="d-flex gap-3 mt-3">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light opacity-75"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light opacity-75"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="border-secondary my-4" />
        <Row>
          <Col className="text-center">
            <p className="small opacity-50 mb-0">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. | Based in
              Kisoro, Uganda — Gateway to the Virunga Mountains.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
