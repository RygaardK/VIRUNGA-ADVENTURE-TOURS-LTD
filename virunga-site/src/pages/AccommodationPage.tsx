import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import SEOHead from '../components/SEOHead';
import AccommodationCard from '../components/AccommodationCard';
import BookingCTA from '../components/BookingCTA';
import {
  accommodations,
  accommodationInfo,
  seasonalPricing,
  bundleDiscount,
} from '../data/accommodations';

const AccommodationPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Accommodation in Kisoro | Lodges, Eco Camps & Hostels | Virunga Adventure Tours"
        description="Book accommodation in Kisoro, Uganda. Stay at Ichumbi Gorilla Lodge, Mutanda Eco Community Centre, or Golden Monkey Guesthouse. Low season discounts and tour bundle deals."
        keywords={[
          'Kisoro accommodation',
          'Bwindi gorilla trekking lodge',
          'Lake Mutanda hotels',
          'accommodation near Bwindi Impenetrable National Park',
          'Kisoro eco lodge',
          'budget hostel Kisoro Uganda',
          'gorilla trekking accommodation',
        ]}
        canonicalUrl="/accommodation"
      />

      {/* Page Header */}
      <section className="page-header bg-success text-white py-5">
        <Container className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Where to Stay</h1>
              <p className="fs-5 opacity-75">
                {accommodationInfo}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Accommodation Listings */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Our Partner Accommodations</h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '650px' }}>
              From luxury gorilla lodges to budget-friendly hostels, we have
              the perfect place for every traveler.
            </p>
          </div>
          <Row className="gy-4">
            {accommodations.map((accommodation) => (
              <Col lg={4} md={6} key={accommodation.id}>
                <AccommodationCard accommodation={accommodation} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Pricing Info */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-6 fw-bold mb-3">Smart Pricing & Discounts</h2>
                <p className="text-muted fs-5">
                  Save money on your Kisoro trip with our seasonal and bundle discounts.
                </p>
              </div>
              <Row className="g-4">
                <Col md={6}>
                  <Card className="border-0 shadow-sm h-100 rounded-3">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div
                          className="bg-success bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center"
                          style={{ width: '56px', height: '56px' }}
                        >
                          <span style={{ fontSize: '1.5rem' }}>🌿</span>
                        </div>
                        <div>
                          <h4 className="mb-0 fw-bold">Low Season Discount</h4>
                          <Badge bg="success" className="mt-1">Save 30%</Badge>
                        </div>
                      </div>
                      <p className="text-muted mb-3">
                        {seasonalPricing.lowSeason.description}
                      </p>
                      <div className="border-top pt-3">
                        <p className="mb-1 small text-muted"><strong>Low Season:</strong> {seasonalPricing.lowSeason.months}</p>
                        <p className="mb-0 small text-muted"><strong>High Season:</strong> {seasonalPricing.highSeason.months}</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 shadow-sm h-100 rounded-3">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div
                          className="bg-warning bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center"
                          style={{ width: '56px', height: '56px' }}
                        >
                          <span style={{ fontSize: '1.5rem' }}>🎒</span>
                        </div>
                        <div>
                          <h4 className="mb-0 fw-bold">Bundle Discount</h4>
                          <Badge bg="warning" text="dark" className="mt-1">Save {bundleDiscount.percentage}%</Badge>
                        </div>
                      </div>
                      <p className="text-muted mb-3">
                        {bundleDiscount.description}
                      </p>
                      <div className="border-top pt-3">
                        <p className="mb-0 small text-muted">
                          Applies when any tour experience is combined with any accommodation.
                          Contact us to get a custom quote.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What to Expect */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-4">
                <h2 className="display-6 fw-bold mb-3">What to Expect</h2>
              </div>
              <Row className="g-3">
                {[
                  { icon: '🌄', title: 'Stunning Views', description: 'Wake up to views of the Virunga Volcanoes and Bwindi forests.' },
                  { icon: '🍽️', title: 'Local Cuisine', description: 'Home-cooked Ugandan meals with fresh ingredients sourced locally.' },
                  { icon: '🌿', title: 'Eco-Friendly', description: 'Most properties use solar energy and support community projects.' },
                  { icon: '🤝', title: 'Warm Hospitality', description: 'Friendly, English-speaking staff ready to make your stay memorable.' },
                  { icon: '📶', title: 'Basic WiFi', description: 'Most lodges offer basic WiFi. Expect limited connectivity in rural areas.' },
                  { icon: '🔒', title: 'Secure & Safe', description: 'All accommodations are in safe locations with secure premises.' },
                ].map((item, index) => (
                  <Col sm={6} key={index}>
                    <div className="d-flex gap-3 p-3 bg-light rounded-3">
                      <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                      <div>
                        <h6 className="fw-bold mb-1">{item.title}</h6>
                        <p className="text-muted small mb-0">{item.description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 bg-light">
        <Container>
          <BookingCTA />
        </Container>
      </section>
    </>
  );
};

export default AccommodationPage;
