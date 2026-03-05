import { Card, Button } from 'react-bootstrap';
import { FiMessageCircle, FiMail, FiPhone } from 'react-icons/fi';
import { COMPANY_INFO } from '../data/experiences';

interface BookingCTAProps {
  experienceTitle?: string;
}

const BookingCTA: React.FC<BookingCTAProps> = ({ experienceTitle }) => {
  const subject = experienceTitle
    ? `Booking Inquiry: ${experienceTitle}`
    : 'Booking Inquiry — Virunga Adventure Tours';
  const whatsappMessage = experienceTitle
    ? `Hello! I'm interested in booking the "${experienceTitle}" experience. Could you please share more details?`
    : `Hello! I'm interested in your tour experiences. Could you please share more details?`;

  return (
    <Card className="booking-cta border-0 bg-success text-white rounded-3 shadow">
      <Card.Body className="p-4 text-center">
        <h4 className="fw-bold mb-2">Ready to Book This Experience?</h4>
        <p className="opacity-75 mb-4">
          Contact us to check availability, ask questions, or customise your tour. We respond within
          24 hours.
        </p>
        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <Button
            variant="light"
            size="lg"
            className="rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2"
            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMessageCircle />
            WhatsApp Us
          </Button>
          <Button
            variant="outline-light"
            size="lg"
            className="rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2"
            href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}`}
          >
            <FiMail />
            Email Us
          </Button>
          <Button
            variant="outline-light"
            size="lg"
            className="rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2"
            href={`tel:${COMPANY_INFO.phone}`}
          >
            <FiPhone />
            Call Us
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookingCTA;
