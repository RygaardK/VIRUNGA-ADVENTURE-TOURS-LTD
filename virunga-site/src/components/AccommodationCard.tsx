import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiMapPin, FiTag, FiPercent } from 'react-icons/fi';
import type { Accommodation } from '../data/accommodations';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

const typeBadgeColors: Record<string, string> = {
  luxury_hotel: 'warning',
  eco_lodge: 'success',
  hostel: 'info',
};

const AccommodationCard: React.FC<AccommodationCardProps> = ({ accommodation }) => {
  return (
    <Card className="accommodation-card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={accommodation.heroImage}
          alt={accommodation.name}
          className="card-img-custom"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/800x500/2d6a4f/ffffff?text=${encodeURIComponent(accommodation.name)}`;
          }}
        />
        <Badge
          bg={typeBadgeColors[accommodation.type] || 'secondary'}
          className="position-absolute top-0 end-0 m-3 text-uppercase small"
        >
          {accommodation.typeLabel}
        </Badge>
      </div>
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold mb-1">{accommodation.name}</Card.Title>
        <div className="d-flex align-items-center gap-1 text-muted small mb-3">
          <FiMapPin size={14} />
          <span>{accommodation.location}</span>
        </div>
        <Card.Text className="text-muted small flex-grow-1">
          {accommodation.description}
        </Card.Text>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {accommodation.seasonalPricing && (
            <span className="badge bg-success bg-opacity-10 text-success d-flex align-items-center gap-1">
              <FiPercent size={12} />
              {accommodation.lowSeasonDiscount}% low season discount
            </span>
          )}
          {accommodation.bundleDiscount > 0 && (
            <span className="badge bg-primary bg-opacity-10 text-primary d-flex align-items-center gap-1">
              <FiTag size={12} />
              {accommodation.bundleDiscount}% bundle discount
            </span>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-success fs-5">From {accommodation.priceFrom}</span>
          <Link
            to={`/accommodation/${accommodation.slug}`}
            className="btn btn-outline-success btn-sm rounded-pill px-3"
          >
            View Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AccommodationCard;
