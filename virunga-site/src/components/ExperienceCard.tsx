import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiClock, FiMapPin } from 'react-icons/fi';
import type { Experience } from '../data/experiences';

interface ExperienceCardProps {
  experience: Experience;
}

const categoryColors: Record<Experience['category'], string> = {
  wildlife: 'success',
  adventure: 'warning',
  cultural: 'info',
  nature: 'primary',
  city: 'secondary',
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Card className="experience-card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
      <div className="card-img-wrapper position-relative">
        <Card.Img
          variant="top"
          src={experience.heroImage}
          alt={experience.title}
          className="card-img-custom"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `https://placehold.co/800x500/2d6a4f/ffffff?text=${encodeURIComponent(experience.title)}`;
          }}
        />
        <Badge
          bg={categoryColors[experience.category]}
          className="position-absolute top-0 end-0 m-3 text-uppercase small"
        >
          {experience.category}
        </Badge>
        {experience.featured && (
          <Badge bg="danger" className="position-absolute top-0 start-0 m-3 small">
            Featured
          </Badge>
        )}
      </div>
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold mb-2">{experience.title}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">{experience.description.slice(0, 120)}...</Card.Text>
        <div className="d-flex justify-content-between align-items-center text-muted small mb-3">
          <span className="d-flex align-items-center gap-1">
            <FiClock />
            {experience.duration}
          </span>
          <span className="d-flex align-items-center gap-1">
            <FiMapPin />
            {experience.pickupFrom}
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-success fs-5">From {experience.priceFrom}</span>
          <Link
            to={`/experiences/${experience.slug}`}
            className="btn btn-outline-success btn-sm rounded-pill px-3"
          >
            View Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
