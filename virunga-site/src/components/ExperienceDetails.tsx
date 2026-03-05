import { Row, Col, Badge } from 'react-bootstrap';
import {
  FiClock,
  FiMapPin,
  FiCheck,
  FiX,
  FiHome,
  FiCoffee,
  FiShield,
  FiUser,
  FiStar,
} from 'react-icons/fi';
import type { Experience } from '../data/experiences';
import TransportOptions from './TransportOptions';
import BookingCTA from './BookingCTA';

interface ExperienceDetailsProps {
  experience: Experience;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({ experience }) => {
  return (
    <div className="experience-details">
      {/* Hero Section */}
      <div className="experience-hero position-relative mb-5">
        <img
          src={experience.heroImage}
          alt={experience.title}
          className="w-100 experience-hero-img rounded-3"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/1200x500/2d6a4f/ffffff?text=${encodeURIComponent(experience.title)}`;
          }}
        />
        <div className="experience-hero-overlay position-absolute bottom-0 start-0 end-0 p-4 p-md-5 rounded-bottom-3">
          <h1 className="display-5 fw-bold text-white mb-2">{experience.title}</h1>
          <p className="text-white opacity-75 fs-5 mb-3">{experience.subtitle}</p>
          <div className="d-flex flex-wrap gap-2">
            <Badge bg="light" text="dark" className="px-3 py-2 d-flex align-items-center gap-1">
              <FiClock /> {experience.duration}
            </Badge>
            <Badge bg="light" text="dark" className="px-3 py-2 d-flex align-items-center gap-1">
              <FiMapPin /> {experience.location}
            </Badge>
            <Badge bg="success" className="px-3 py-2 fs-6">
              From {experience.priceFrom}
            </Badge>
          </div>
        </div>
      </div>

      <Row className="gy-4">
        {/* Main Content */}
        <Col lg={8}>
          {/* Description */}
          <div className="mb-5">
            <h2 className="fw-bold mb-3">About This Experience</h2>
            {experience.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-muted lh-lg" dangerouslySetInnerHTML={{
                __html: paragraph
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\n/g, '<br />')
              }} />
            ))}
          </div>

          {/* Highlights */}
          <div className="mb-5">
            <h4 className="fw-bold mb-3 d-flex align-items-center gap-2">
              <FiStar className="text-warning" />
              Highlights
            </h4>
            <ul className="list-unstyled">
              {experience.highlights.map((highlight, index) => (
                <li key={index} className="d-flex align-items-start gap-2 mb-2">
                  <FiCheck className="text-success mt-1 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Transport Options */}
          <TransportOptions options={experience.transportOptions} />

          {/* Price Note */}
          {experience.priceNote && (
            <div className="alert alert-success border-0 rounded-3 mb-5" role="alert">
              <strong>Pricing Note:</strong> {experience.priceNote}
            </div>
          )}
        </Col>

        {/* Sidebar */}
        <Col lg={4}>
          {/* Quick Info Card */}
          <div className="card border-0 shadow-sm rounded-3 mb-4 sticky-lg-top" style={{ top: '90px' }}>
            <div className="card-body p-4">
              <h5 className="fw-bold mb-3">Quick Info</h5>
              <ul className="list-unstyled mb-0">
                <li className="d-flex justify-content-between py-2 border-bottom">
                  <span className="d-flex align-items-center gap-2 text-muted">
                    <FiClock /> Duration
                  </span>
                  <span className="fw-medium">{experience.duration}</span>
                </li>
                <li className="d-flex justify-content-between py-2 border-bottom">
                  <span className="d-flex align-items-center gap-2 text-muted">
                    <FiMapPin /> Pickup
                  </span>
                  <span className="fw-medium">{experience.pickupFrom}</span>
                </li>
                <li className="d-flex justify-content-between py-2 border-bottom">
                  <span className="d-flex align-items-center gap-2 text-muted">
                    <FiHome /> Accommodation
                  </span>
                  <span className="fw-medium small text-end" style={{ maxWidth: '55%' }}>
                    {experience.accommodation}
                  </span>
                </li>
                <li className="d-flex justify-content-between py-2 border-bottom">
                  <span className="d-flex align-items-center gap-2 text-muted">
                    <FiCoffee /> Meals
                  </span>
                  <span className="fw-medium">{experience.meals}</span>
                </li>
                <li className="d-flex justify-content-between py-2 border-bottom">
                  <span className="d-flex align-items-center gap-2 text-muted">
                    <FiShield /> Permit
                  </span>
                  <span className="fw-medium">{experience.permit}</span>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <span className="d-flex align-items-center gap-2 text-muted">
                    <FiUser /> Guide
                  </span>
                  <span className="fw-medium">{experience.guide}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Included */}
          <div className="card border-0 shadow-sm rounded-3 mb-4">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-3 text-success">What's Included</h5>
              <ul className="list-unstyled mb-0">
                {experience.included.map((item, index) => (
                  <li key={index} className="d-flex align-items-start gap-2 mb-2">
                    <FiCheck className="text-success mt-1 flex-shrink-0" />
                    <span className="small">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Not Included */}
          <div className="card border-0 shadow-sm rounded-3 mb-4">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-3 text-danger">Not Included</h5>
              <ul className="list-unstyled mb-0">
                {experience.notIncluded.map((item, index) => (
                  <li key={index} className="d-flex align-items-start gap-2 mb-2">
                    <FiX className="text-danger mt-1 flex-shrink-0" />
                    <span className="small">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>

      {/* Booking CTA */}
      <div className="mt-5">
        <BookingCTA experienceTitle={experience.title} />
      </div>
    </div>
  );
};

export default ExperienceDetails;
