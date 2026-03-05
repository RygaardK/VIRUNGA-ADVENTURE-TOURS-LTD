import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Breadcrumb } from 'react-bootstrap';
import SEOHead from '../components/SEOHead';
import BookingCTA from '../components/BookingCTA';
import { getTransportBySlug } from '../data/transport';

const TransportDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const transport = slug ? getTransportBySlug(slug) : undefined;

  if (!transport) {
    return (
      <>
        <SEOHead
          title="Transport Service Not Found | Virunga Adventure Tours"
          description="The requested transport service could not be found."
        />
        <Container className="py-5 text-center" style={{ minHeight: '60vh' }}>
          <div className="py-5">
            <h1 className="display-4 fw-bold mb-3">Transport Not Found</h1>
            <p className="text-muted fs-5 mb-4">
              Sorry, we could not find the transport service you are looking for.
            </p>
            <Link to="/transport" className="btn btn-success rounded-pill px-4">
              Browse Transport Options
            </Link>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={transport.seo.title}
        description={transport.seo.description}
        keywords={transport.seo.keywords}
        canonicalUrl={`/transport/${transport.slug}`}
        ogImage={transport.heroImage}
      />

      <Container className="py-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/transport' }}>Transport</Breadcrumb.Item>
          <Breadcrumb.Item active>{transport.name}</Breadcrumb.Item>
        </Breadcrumb>

        {/* Hero */}
        <section className="bg-success text-white rounded-3 p-5 mb-5">
          <Row className="align-items-center">
            <Col lg={8}>
              <span style={{ fontSize: '3rem' }}>{transport.icon}</span>
              <h1 className="display-5 fw-bold mt-2 mb-3">{transport.name}</h1>
              <p className="fs-5 opacity-75 mb-3">{transport.description}</p>
              <div className="d-flex flex-wrap gap-2">
                {transport.fuelIncluded && <Badge bg="light" text="dark">Fuel Included</Badge>}
                {transport.englishDriver && <Badge bg="light" text="dark">English Driver</Badge>}
                {transport.crossBorder && <Badge bg="warning" text="dark">Cross-Border Available</Badge>}
                {transport.driverIncluded && <Badge bg="light" text="dark">Driver Included</Badge>}
              </div>
            </Col>
            <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
              <div className="bg-white bg-opacity-10 rounded-3 p-4 d-inline-block">
                <p className="small mb-1 opacity-75">Starting from</p>
                <p className="display-6 fw-bold mb-1">{transport.priceFrom}</p>
                <p className="small mb-0 opacity-75">{transport.pricingModel}</p>
              </div>
            </Col>
          </Row>
        </section>

        {/* Long description */}
        <Row className="mb-5">
          <Col lg={8}>
            <h2 className="fw-bold mb-4">About This Service</h2>
            {transport.longDescription.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted fs-6">{para}</p>
            ))}
          </Col>
          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-3">Service Details</h5>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span className="text-muted">Pricing</span>
                    <span className="fw-medium">{transport.pricingModel}</span>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span className="text-muted">Fuel</span>
                    <span className="fw-medium">{transport.fuelIncluded ? 'Included' : 'Not included'}</span>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span className="text-muted">Driver</span>
                    <span className="fw-medium">{transport.driverIncluded ? 'Included' : 'Self-drive'}</span>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span className="text-muted">Cross-border</span>
                    <span className="fw-medium">{transport.crossBorder ? 'Yes' : 'No'}</span>
                  </li>
                  {transport.airportPickup.length > 0 && (
                    <li className="py-2">
                      <span className="text-muted d-block mb-1">Airport pickups</span>
                      <div className="d-flex flex-wrap gap-1">
                        {transport.airportPickup.map((ap) => (
                          <Badge bg="success" bg-opacity-10 key={ap}>{ap}</Badge>
                        ))}
                      </div>
                    </li>
                  )}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Features */}
        <Row className="mb-5">
          <Col lg={6}>
            <Card className="border-0 shadow-sm rounded-3 h-100">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-3">Features</h5>
                <ul className="mb-0">
                  {transport.features.map((f, i) => (
                    <li key={i} className="mb-2 text-muted">{f}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <Card className="border-0 shadow-sm rounded-3 h-100">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-3">Best For</h5>
                <div className="d-flex flex-wrap gap-2">
                  {transport.bestFor.map((b, i) => (
                    <Badge bg="success" className="bg-opacity-10 text-success fw-normal px-3 py-2" key={i}>
                      {b}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Price Note */}
        {transport.priceNote && (
          <Row className="mb-5 justify-content-center">
            <Col lg={8}>
              <div className="bg-light rounded-3 p-4 text-center">
                <p className="mb-0 text-muted">
                  <strong>Pricing Note:</strong> {transport.priceNote}
                </p>
              </div>
            </Col>
          </Row>
        )}

        <BookingCTA />
      </Container>
    </>
  );
};

export default TransportDetailPage;
