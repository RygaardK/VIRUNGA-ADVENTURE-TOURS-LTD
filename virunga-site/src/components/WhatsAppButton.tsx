import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY_INFO } from '../data/experiences';

interface WhatsAppButtonProps {
  /** Custom message pre-filled in WhatsApp chat */
  message?: string;
  /** Button label text */
  label?: string;
  /** Render as floating fixed button */
  floating?: boolean;
  /** Bootstrap variant */
  variant?: 'success' | 'light' | 'outline-success';
  /** Button size */
  size?: 'sm' | 'lg';
  /** Additional CSS class names */
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = 'Hello! I would like to book a tour with Virunga Adventure Tours.',
  label = 'Book via WhatsApp',
  floating = false,
  variant = 'success',
  size,
  className = '',
}) => {
  const phone = COMPANY_INFO.whatsapp.replace(/\s+/g, '');
  const text = encodeURIComponent(message);
  const link = `https://wa.me/${phone}?text=${text}`;

  if (floating) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    );
  }

  const sizeClass = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '';
  const variantClass =
    variant === 'outline-success' ? 'btn-outline-success' : `btn-${variant}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variantClass} ${sizeClass} rounded-pill fw-semibold d-inline-flex align-items-center gap-2 ${className}`}
    >
      <FaWhatsapp size={18} />
      {label}
    </a>
  );
};

export default WhatsAppButton;

// -------------------------------------------------------------------
// Pre-built message generators for contextual WhatsApp buttons
// -------------------------------------------------------------------

export const whatsappMessages = {
  // Experience / Activity pages
  experience: (name: string) =>
    `Hello! I am interested in the "${name}" experience with Virunga Adventure Tours. Could you share availability and pricing?`,

  // Accommodation pages
  accommodation: (name: string) =>
    `Hello! I would like to book a stay at ${name} through Virunga Adventure Tours. Could you share availability and rates?`,

  // Transport pages
  transport: (name: string) =>
    `Hello! I need ${name} transport arranged by Virunga Adventure Tours. Could you share pricing and availability?`,

  // Package pages
  tourPackage: (name: string) =>
    `Hello! I am interested in the "${name}" tour package with Virunga Adventure Tours. Could you share availability and details?`,

  // Airport transfer
  airportTransfer: (from: string, to: string) =>
    `Hello! I need an airport transfer from ${from} to ${to} arranged by Virunga Adventure Tours. Could you confirm pricing?`,

  // Generic
  general:
    'Hello! I would like to learn more about tours and activities with Virunga Adventure Tours in Kisoro, Uganda.',

  // Contact page
  contact:
    'Hello! I have a question about Virunga Adventure Tours. Could you help me?',
};
