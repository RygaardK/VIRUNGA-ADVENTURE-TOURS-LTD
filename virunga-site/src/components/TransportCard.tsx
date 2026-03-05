import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiCheck, FiX, FiGlobe, FiDollarSign } from 'react-icons/fi';
import { FaMotorcycle, FaCar, FaShip } from 'react-icons/fa';
import type { TransportService } from '../data/transport';

const transportIconMap: Record<string, React.ReactNode> = {
  motorcycle: <FaMotorcycle />,
  car: <FaCar />,
  ship: <FaShip />,
};

interface TransportCardProps {
  transport: TransportService;
}

const TransportCard: React.FC<TransportCardProps> = ({ transport }) => {
  return (
    <Card className="transport-card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={transport.heroImage}
          alt={transport.name}
          className="card-img-custom"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/800x500/1b4332/ffffff?text=${encodeURIComponent(transport.name)}`;
          }}
        />
        <div className="position-absolute top-0 start-0 m-3 fs-2 text-white" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))' }}>{transportIconMap[transport.icon] || transport.icon}</div>
      </div>
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold mb-2">{transport.name}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">
          {transport.description}
        </Card.Text>

        <div className="d-flex flex-wrap gap-2 mb-3">
          <Badge bg="light" text="dark" className="d-flex align-items-center gap-1 px-2 py-1">
            <FiDollarSign size={12} />
            {transport.pricingModel}
          </Badge>
          <Badge bg={transport.fuelIncluded ? 'success' : 'secondary'} className="bg-opacity-10 text-success d-flex align-items-center gap-1 px-2 py-1">
            {transport.fuelIncluded ? <FiCheck size={12} /> : <FiX size={12} />}
            Fuel {transport.fuelIncluded ? 'included' : 'extra'}
          </Badge>
          {transport.crossBorder && (
            <Badge bg="primary" className="bg-opacity-10 text-primary d-flex align-items-center gap-1 px-2 py-1">
              <FiGlobe size={12} />
              Cross-border
            </Badge>
          )}
        </div>

        {transport.airportPickup.length > 0 && (
          <p className="text-muted small mb-3">
            <strong>Airport pickups:</strong> {transport.airportPickup.join(', ')}
          </p>
        )}

        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-success fs-5">From {transport.priceFrom}</span>
          <Link
            to={`/transport/${transport.slug}`}
            className="btn btn-outline-success btn-sm rounded-pill px-3"
          >
            View Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TransportCard;
