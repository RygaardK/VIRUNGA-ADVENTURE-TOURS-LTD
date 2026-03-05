import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Breadcrumb } from 'react-bootstrap';
import SEOHead from '../components/SEOHead';
import BookingCTA from '../components/BookingCTA';
import { getPackageBySlug } from '../data/packages';

const PackageDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = slug ? getPackageBySlug(slug) : undefined;

  if (!pkg) {
    return (
      <>
        <SEOHead
          title="Package Not Found | Virunga Adventure Tours"
          description="The requested tour package could not be found."
        />
        <Container className="py-5 text-center" style={{ minHeight: '60vh' }}>
          <div className="py-5">
            <h1 className="display-4 fw-bold mb-3">Package Not Found</h1>
            <p className="text-muted fs-5 mb-4">
              Sorry, we could not find the tour package you are looking for.
            </p>
            <Link to="/packages" className="btn btn-success rounded-pill px-4">
              Browse Tour Packages
            </Link>
          </div>
        </Container>
      </>
    );
  }

  const difficultyColors: Record<string, string> = {
    Easy: 'success',
    Moderate: 'warning',
    Challenging: 'danger',
  };

  return (
    <>
      <SEOHead
        title={pkg.seo.title}
        description={pkg.seo.description}
        keywords={pkg.seo.keywords}
        canonicalUrl={`/packages/${pkg.slug}`}
        ogImage={pkg.heroImage}
      />

      <Container className="py-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/packages' }}>Packages</Breadcrumb.Item>
          <Breadcrumb.Item active>{pkg.name}</Breadcrumb.Item>
        </Breadcrumb>

        {/* Hero */}
        <section className="bg-success text-white rounded-3 p-5 mb-5">
          <Row className="align-items-center">
            <Col lg={8}>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <Badge bg={difficultyColors[pkg.difficulty] || 'secondary'}>
                  {pkg.difficulty}
                </Badge>
                <Badge bg="light" text="dark">{pkg.duration}</Badge>
                <Badge bg="light" text="dark">Group: {pkg.groupSize}</Badge>
              </div>
              <h1 className="display-5 fw-bold mb-2">{pkg.name}</h1>
              <p className="fs-6 opacity-75 mb-3">{pkg.subtitle}</p>
              <p className="opacity-75">{pkg.description}</p>
            </Col>
            <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
              <div className="bg-white bg-opacity-10 rounded-3 p-4 d-inline-block">
                <p className="small mb-1 opacity-75">From</p>
                <p className="display-6 fw-bold mb-1">{pkg.priceFrom}</p>
                <p className="small mb-0 opacity-75">per person</p>
              </div>
            </Col>
          </Row>
        </section>

        {/* Overview */}
        <Row className="mb-5">
          <Col lg={8}>
            <h2 className="fw-bold mb-4">Package Overview</h2>
            {pkg.longDescription.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted fs-6">{para}</p>
            ))}
          </Col>
          <Col lg={4}>
            {/* Highlights */}
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-3">Highlights</h5>
                <ul className="mb-0 ps-3">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="mb-2 text-muted">{h}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Day-by-Day Itinerary */}
        <section className="mb-5">
          <h2 className="fw-bold mb-4 text-center">Day-by-Day Itinerary</h2>
          <Row className="justify-content-center">
            <Col lg={10}>
              {pkg.itinerary.map((day) => (
                <Card key={day.day} className="border-0 shadow-sm rounded-3 mb-4">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start gap-3">
                      <div
                        className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: '48px', height: '48px', fontSize: '1.1rem', fontWeight: 'bold' }}
                      >
                        {day.day}
                      </div>
                      <div className="flex-grow-1">
                        <h4 className="fw-bold mb-2">Day {day.day}: {day.title}</h4>
                        <p className="text-muted mb-3">{day.description}</p>
                        <div className="bg-light rounded-3 p-3">
                          <h6 className="fw-bold mb-2 small text-uppercase text-success">Activities</h6>
                          <ul className="mb-0 ps-3">
                            {day.activities.map((activity, i) => (
                              <li key={i} className="mb-1 small text-muted">{activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </section>

        {/* Included / Not Included */}
        <Row className="mb-5">
          <Col md={6}>
            <Card className="border-0 shadow-sm rounded-3 h-100">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-3 text-success">What is Included</h5>
                <ul className="mb-0 ps-3">
                  {pkg.included.map((item, i) => (
                    <li key={i} className="mb-2 text-muted">
                      <span className="text-success me-1">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <Card className="border-0 shadow-sm rounded-3 h-100">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-3 text-danger">Not Included</h5>
                <ul className="mb-0 ps-3">
                  {pkg.notIncluded.map((item, i) => (
                    <li key={i} className="mb-2 text-muted">
                      <span className="text-danger me-1">&#10007;</span> {item}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Price Note */}
        {pkg.priceNote && (
          <Row className="mb-5 justify-content-center">
            <Col lg={8}>
              <div className="bg-light rounded-3 p-4 text-center">
                <p className="mb-0 text-muted">
                  <strong>Pricing Note:</strong> {pkg.priceNote}
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

export default PackageDetailPage;
