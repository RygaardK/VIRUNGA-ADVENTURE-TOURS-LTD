import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiClock, FiUsers, FiArrowRight } from 'react-icons/fi';
import type { TourPackage } from '../data/packages';

interface PackageCardProps {
  tourPackage: TourPackage;
}

const difficultyColors: Record<string, string> = {
  Easy: 'success',
  Moderate: 'warning',
  Challenging: 'danger',
};

const PackageCard: React.FC<PackageCardProps> = ({ tourPackage }) => {
  return (
    <Card className="package-card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={tourPackage.heroImage}
          alt={tourPackage.name}
          className="card-img-custom"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/800x500/1b4332/ffffff?text=${encodeURIComponent(tourPackage.name)}`;
          }}
        />
        <Badge
          bg={difficultyColors[tourPackage.difficulty]}
          className="position-absolute top-0 end-0 m-3 small"
        >
          {tourPackage.difficulty}
        </Badge>
        <Badge
          bg="dark"
          className="position-absolute top-0 start-0 m-3 small bg-opacity-75"
        >
          {tourPackage.duration}
        </Badge>
      </div>
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold mb-1">{tourPackage.name}</Card.Title>
        <p className="text-success small fw-medium mb-2">{tourPackage.subtitle}</p>
        <Card.Text className="text-muted small flex-grow-1">
          {tourPackage.description.slice(0, 150)}...
        </Card.Text>

        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge bg-light text-dark d-flex align-items-center gap-1">
            <FiClock size={12} />
            {tourPackage.duration}
          </span>
          <span className="badge bg-light text-dark d-flex align-items-center gap-1">
            <FiUsers size={12} />
            {tourPackage.groupSize}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="fw-bold text-success fs-5">From {tourPackage.priceFrom}</span>
            <br />
            <span className="text-muted small">per person</span>
          </div>
          <Link
            to={`/packages/${tourPackage.slug}`}
            className="btn btn-success btn-sm rounded-pill px-3 d-flex align-items-center gap-1"
          >
            View Package <FiArrowRight size={14} />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PackageCard;
