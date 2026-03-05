import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Breadcrumb } from 'react-bootstrap';
import SEOHead from '../components/SEOHead';
import BookingCTA from '../components/BookingCTA';
import WhatsAppButton, { whatsappMessages } from '../components/WhatsAppButton';
import { getAccommodationBySlug } from '../data/accommodations';

const AccommodationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const accommodation = slug ? getAccommodationBySlug(slug) : undefined;

  if (!accommodation) {
    return (
      <>
        <SEOHead
          title="Accommodation Not Found | Virunga Adventure Tours"
          description="The requested accommodation could not be found."
        />
        <Container className="py-5 text-center" style={{ minHeight: '60vh' }}>
          <div className="py-5">
            <h1 className="display-4 fw-bold mb-3">Accommodation Not Found</h1>
            <p className="text-muted fs-5 mb-4">
              Sorry, we could not find the accommodation you are looking for.
            </p>
            <Link to="/accommodation" className="btn btn-success rounded-pill px-4">
              Browse Accommodations
            </Link>
          </div>
        </Container>
      </>
    );
  }

  const typeColors: Record<string, string> = {
    luxury_hotel: 'warning',
    eco_lodge: 'success',
    hostel: 'info',
  };

  return (
    <>
      <SEOHead
        title={accommodation.seo.title}
        description={accommodation.seo.description}
        keywords={accommodation.seo.keywords}
        canonicalUrl={`/accommodation/${accommodation.slug}`}
        ogImage={accommodation.heroImage}
      />

      <Container className="py-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/accommodation' }}>Accommodation</Breadcrumb.Item>
          <Breadcrumb.Item active>{accommodation.name}</Breadcrumb.Item>
        </Breadcrumb>

        {/* Hero */}
        <section className="bg-success text-white rounded-3 p-5 mb-5">
          <Row className="align-items-center">
            <Col lg={8}>
              <Badge bg={typeColors[accommodation.type] || 'secondary'} className="mb-3 px-3 py-2">
                {accommodation.typeLabel}
              </Badge>
              <h1 className="display-5 fw-bold mb-3">{accommodation.name}</h1>
              <p className="fs-5 opacity-75 mb-2">{accommodation.location}</p>
              <p className="opacity-75 mb-3">{accommodation.description}</p>
              <WhatsAppButton
                message={whatsappMessages.accommodation(accommodation.name)}
                label="Book This Accommodation"
                variant="light"
                size="lg"
              />
            </Col>
            <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
              <div className="bg-white bg-opacity-10 rounded-3 p-4 d-inline-block">
                <p className="small mb-1 opacity-75">Starting from</p>
                <p className="display-6 fw-bold mb-1">{accommodation.priceFrom}</p>
                <p className="small mb-0 opacity-75">{accommodation.priceNote}</p>
              </div>
            </Col>
          </Row>
        </section>

        {/* Content */}
        <Row className="mb-5">
          <Col lg={8}>
            <h2 className="fw-bold mb-4">About {accommodation.name}</h2>
            {accommodation.longDescription.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted fs-6">{para}</p>
            ))}
          </Col>
          <Col lg={4}>
            {/* Amenities */}
            <Card className="border-0 shadow-sm rounded-3 mb-4">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-3">Amenities</h5>
                <div className="d-flex flex-wrap gap-2">
                  {accommodation.amenities.map((amenity) => (
                    <Badge
                      key={amenity}
                      bg="success"
                      className="bg-opacity-10 text-success fw-normal px-3 py-2"
                    >
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>

            {/* Pricing Info */}
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-3">Pricing Info</h5>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span className="text-muted">Base Price</span>
                    <span className="fw-medium">{accommodation.priceFrom}</span>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span className="text-muted">Partner Rates</span>
                    <span className="fw-medium">{accommodation.partnerRates ? 'Yes' : 'No'}</span>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span className="text-muted">Low Season Discount</span>
                    <span className="fw-medium text-success">{accommodation.lowSeasonDiscount}% off</span>
                  </li>
                  <li className="d-flex justify-content-between py-2">
                    <span className="text-muted">Bundle Discount</span>
                    <span className="fw-medium text-warning">{accommodation.bundleDiscount}% off</span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Highlights */}
        <Row className="mb-5">
          <Col>
            <h3 className="fw-bold mb-4">Highlights</h3>
            <Row className="g-3">
              {accommodation.highlights.map((highlight, i) => (
                <Col sm={6} md={4} key={i}>
                  <div className="d-flex gap-2 p-3 bg-light rounded-3">
                    <span className="text-success fw-bold">&#10003;</span>
                    <span className="text-muted">{highlight}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <BookingCTA />
      </Container>
    </>
  );
};

export default AccommodationDetailPage;
