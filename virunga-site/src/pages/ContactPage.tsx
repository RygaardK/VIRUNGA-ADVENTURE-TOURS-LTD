import { useState, type FormEvent } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FiPhone, FiMail, FiMapPin, FiMessageCircle, FiSend } from 'react-icons/fi';
import SEOHead from '../components/SEOHead';
import { COMPANY_INFO } from '../data/experiences';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would connect to a form service (Formspree, Netlify Forms, etc.)
    const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Website Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Virunga Adventure Tours — Book Your Kisoro Adventure"
        description="Get in touch with Virunga Adventure Tours to book gorilla trekking, volcano hiking, and more in Kisoro, Uganda. We respond within 24 hours."
        keywords={[
          'contact Virunga Adventure Tours',
          'book gorilla trekking',
          'Kisoro tour booking',
          'Uganda tour inquiry',
        ]}
        canonicalUrl="/contact"
      />

      {/* Page Header */}
      <section className="page-header bg-success text-white py-5">
        <Container className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Contact Us</h1>
              <p className="fs-5 opacity-75">
                Ready to start your adventure? Get in touch — we'd love to hear from you and help
                plan your perfect trip.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="gy-5">
            {/* Contact Info */}
            <Col lg={5}>
              <h2 className="fw-bold mb-4">Get In Touch</h2>
              <p className="text-muted mb-4">
                Whether you want to book a tour, ask about availability, or plan a custom itinerary —
                we're here to help. Reach out through any of the channels below, and we'll get back to
                you within 24 hours.
              </p>

              <div className="d-flex flex-column gap-4 mb-5">
                <Card className="border-0 shadow-sm rounded-3">
                  <Card.Body className="d-flex align-items-center gap-3 p-3">
                    <div className="bg-success bg-opacity-10 rounded-circle p-3">
                      <FiMessageCircle size={24} className="text-success" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">WhatsApp</h6>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\s+/g, '')}`}
                        className="text-muted text-decoration-none"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {COMPANY_INFO.whatsapp}
                      </a>
                      <p className="text-muted small mb-0">Fastest response — usually within 1 hour</p>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm rounded-3">
                  <Card.Body className="d-flex align-items-center gap-3 p-3">
                    <div className="bg-success bg-opacity-10 rounded-circle p-3">
                      <FiMail size={24} className="text-success" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">Email</h6>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-muted text-decoration-none"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <p className="text-muted small mb-0">We respond within 24 hours</p>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm rounded-3">
                  <Card.Body className="d-flex align-items-center gap-3 p-3">
                    <div className="bg-success bg-opacity-10 rounded-circle p-3">
                      <FiPhone size={24} className="text-success" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">Phone</h6>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-muted text-decoration-none"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <p className="text-muted small mb-0">Available Mon–Sat, 7am–8pm EAT</p>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm rounded-3">
                  <Card.Body className="d-flex align-items-center gap-3 p-3">
                    <div className="bg-success bg-opacity-10 rounded-circle p-3">
                      <FiMapPin size={24} className="text-success" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">Office</h6>
                      <span className="text-muted">{COMPANY_INFO.address}</span>
                      <p className="text-muted small mb-0">Visit us in person — walk-ins welcome</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            {/* Contact Form */}
            <Col lg={7}>
              <Card className="border-0 shadow-sm rounded-3">
                <Card.Body className="p-4 p-lg-5">
                  <h3 className="fw-bold mb-2">Send Us a Message</h3>
                  <p className="text-muted mb-4">
                    Fill in the form below and we'll get back to you as soon as possible.
                  </p>

                  {submitted ? (
                    <Alert variant="success" className="rounded-3">
                      <Alert.Heading>Thank you for your message!</Alert.Heading>
                      <p className="mb-0">
                        Your email client should open with a pre-filled message. If it doesn't, please
                        email us directly at{' '}
                        <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>.
                      </p>
                    </Alert>
                  ) : (
                    <Form onSubmit={handleSubmit}>
                      <Row className="gy-3">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label className="fw-medium small">Full Name *</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              required
                              className="rounded-3"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label className="fw-medium small">Email Address *</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              required
                              className="rounded-3"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group>
                            <Form.Label className="fw-medium small">Subject</Form.Label>
                            <Form.Select
                              value={formData.subject}
                              onChange={(e) =>
                                setFormData({ ...formData, subject: e.target.value })
                              }
                              className="rounded-3"
                            >
                              <option value="">Select a topic...</option>
                              <option value="Gorilla Trekking Inquiry">Gorilla Trekking</option>
                              <option value="Volcano Hiking Inquiry">Volcano Hiking</option>
                              <option value="Golden Monkey Tracking Inquiry">
                                Golden Monkey Tracking
                              </option>
                              <option value="Cultural Experience Inquiry">Cultural Experience</option>
                              <option value="Lake Mutanda Activities">
                                Lake Mutanda Activities
                              </option>
                              <option value="Custom Itinerary Request">
                                Custom Itinerary Request
                              </option>
                              <option value="General Inquiry">General Inquiry</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group>
                            <Form.Label className="fw-medium small">Your Message *</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={5}
                              placeholder="Tell us about your travel plans, dates, group size, and any questions..."
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                              }
                              required
                              className="rounded-3"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Button
                            type="submit"
                            variant="success"
                            size="lg"
                            className="w-100 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2"
                          >
                            <FiSend />
                            Send Message
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
