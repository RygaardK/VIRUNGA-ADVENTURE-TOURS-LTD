import { Container, Row, Col } from 'react-bootstrap';
import SEOHead from '../components/SEOHead';
import PackageCard from '../components/PackageCard';
import BookingCTA from '../components/BookingCTA';
import { tourPackages } from '../data/packages';

const PackagesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Tour Packages | Gorilla Trekking & Adventure Combos | Virunga Adventure Tours"
        description="All-inclusive Uganda tour packages: gorilla trekking, volcano hiking, Lake Mutanda adventures. Multi-day itineraries with accommodation, transport, and guided activities."
        keywords={[
          'Uganda gorilla trekking package',
          'Bwindi tour package',
          'Kisoro tour package',
          'Mgahinga volcano hiking package',
          'Lake Mutanda adventure package',
          'Uganda safari packages',
          'gorilla trekking all inclusive',
        ]}
        canonicalUrl="/packages"
      />

      {/* Page Header */}
      <section className="page-header bg-success text-white py-5">
        <Container className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Tour Packages</h1>
              <p className="fs-5 opacity-75">
                Pre-designed multi-day packages combining activities, accommodation, and transport
                for the ultimate Kisoro adventure. Every package is fully customizable.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Package Listings */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Choose Your Adventure</h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '650px' }}>
              Each package is designed for international travelers visiting Uganda.
              All prices include accommodation, transport, meals, and guided activities.
            </p>
          </div>
          <Row className="gy-4">
            {tourPackages.map((pkg) => (
              <Col lg={4} md={6} key={pkg.id}>
                <PackageCard tourPackage={pkg} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* What is Included */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-4">
                <h2 className="display-6 fw-bold mb-3">What Every Package Includes</h2>
              </div>
              <Row className="g-3">
                {[
                  { icon: '🏨', text: 'Accommodation at partner lodges' },
                  { icon: '🚗', text: '4x4 transport with English-speaking driver' },
                  { icon: '🍽️', text: 'Meals as per itinerary (B/L/D)' },
                  { icon: '🎒', text: 'All guided activities and park fees' },
                  { icon: '🛬', text: 'Airport transfers (optional)' },
                  { icon: '📞', text: '24/7 trip support' },
                ].map((item, i) => (
                  <Col sm={6} key={i}>
                    <div className="d-flex gap-3 p-3 bg-white rounded-3 shadow-sm">
                      <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                      <span className="fw-medium">{item.text}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Custom Package */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={7}>
              <h2 className="display-6 fw-bold mb-3">Need a Custom Package?</h2>
              <p className="text-muted fs-5 mb-4">
                We can design a custom itinerary based on your interests, budget, and travel dates.
                Whether you want to combine gorilla trekking with a Kigali city tour or add extra
                nights at Lake Mutanda, we will make it happen.
              </p>
              <a href="/contact" className="btn btn-success btn-lg px-5 rounded-pill">
                Request a Custom Package
              </a>
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

export default PackagesPage;
