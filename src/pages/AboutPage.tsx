import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiHeart, FiTarget, FiGlobe, FiUsers, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import SEOHead from '../components/SEOHead';
import BookingCTA from '../components/BookingCTA';
import { COMPANY_INFO } from '../data/experiences';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us | Virunga Adventure Tours — Locally Owned in Kisoro, Uganda"
        description="Learn about Virunga Adventure Tours Ltd — a locally owned tour company in Kisoro, Uganda. We specialize in gorilla trekking, volcano hiking, and authentic cultural tours."
        keywords={[
          'about Virunga Adventure Tours',
          'Kisoro tour company',
          'Uganda local tour operator',
          'responsible tourism Uganda',
        ]}
        canonicalUrl="/about"
      />

      {/* Page Header */}
      <section className="page-header bg-success text-white py-5">
        <Container className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">About Us</h1>
              <p className="fs-5 opacity-75">
                Locally owned. Community driven. Passionate about sharing the beauty of Kisoro with
                the world.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <img
                src="/images/about-story.jpg"
                alt="Virunga Adventure Tours team in the field"
                className="w-100 rounded-3 shadow"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://placehold.co/600x400/2d6a4f/ffffff?text=Our+Story';
                }}
              />
            </Col>
            <Col lg={6}>
              <h2 className="display-6 fw-bold mb-3">Our Story</h2>
              <p className="text-muted lh-lg">
                {COMPANY_INFO.name} was founded with a simple mission: to share the extraordinary
                natural beauty and rich cultural heritage of Kisoro with travellers from around the
                world.
              </p>
              <p className="text-muted lh-lg">
                Based in the heart of Kisoro Town — the gateway to both Bwindi Impenetrable National
                Park and Mgahinga Gorilla National Park — we are uniquely positioned to offer
                authentic, locally guided experiences that go beyond the ordinary safari.
              </p>
              <p className="text-muted lh-lg">
                Our team is made up of passionate local guides, trackers, and travel specialists who
                were born and raised in this remarkable region. We know every trail, every community,
                and every hidden gem — and we love sharing them with our guests.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Our Mission & Values</h2>
            <p className="text-muted fs-5">
              Everything we do is guided by our commitment to responsible tourism and community
              empowerment.
            </p>
          </div>
          <Row className="gy-4">
            {[
              {
                icon: <FiHeart size={32} className="text-success" />,
                title: 'Community First',
                description:
                  'We work directly with local communities, ensuring that tourism revenue supports livelihoods, education, and conservation efforts in Kisoro and beyond.',
              },
              {
                icon: <FiTarget size={32} className="text-success" />,
                title: 'Authentic Experiences',
                description:
                  'We don\'t offer cookie-cutter tours. Every experience is thoughtfully designed to give you genuine insight into the nature, culture, and people of southwestern Uganda.',
              },
              {
                icon: <FiGlobe size={32} className="text-success" />,
                title: 'Conservation',
                description:
                  'From gorilla trekking permits to community-led conservation projects, we actively support efforts to protect the unique biodiversity of the Virunga region.',
              },
              {
                icon: <FiUsers size={32} className="text-success" />,
                title: 'Personal Service',
                description:
                  'As a locally owned company, we pride ourselves on personalized attention. You\'ll always deal directly with our team — no agents, no middlemen.',
              },
            ].map((value, index) => (
              <Col lg={3} md={6} key={index}>
                <Card className="border-0 shadow-sm h-100 rounded-3 text-center p-3">
                  <Card.Body>
                    <div className="mb-3">{value.icon}</div>
                    <Card.Title className="fw-bold">{value.title}</Card.Title>
                    <Card.Text className="text-muted small">{value.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* What We Offer */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="display-6 fw-bold mb-3">What We Offer</h2>
              <p className="text-muted lh-lg mb-4">
                We specialise in a wide range of tours and experiences across the Kisoro region and
                neighbouring Rwanda. Our offerings include:
              </p>
            </Col>
          </Row>
          <Row className="gy-3 justify-content-center">
            {[
              'Gorilla trekking in Bwindi & Mgahinga',
              'Volcano hiking (Mt Muhabura, Sabyinyo, Mgahinga)',
              'Golden monkey tracking',
              'Cultural & community village visits',
              'Batwa pygmy trail experiences',
              'Lake Mutanda canoeing & boat tours',
              'Nature walks and birdwatching',
              'Coffee farm experiences',
              'Village bike tours',
              'Kigali, Rwanda day trips',
              'Custom multi-day itineraries',
              'Airport transfers and transport',
            ].map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="d-flex align-items-center gap-2 p-3 bg-light rounded-3">
                  <span className="text-success fw-bold">✓</span>
                  <span>{item}</span>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Link to="/experiences" className="btn btn-success rounded-pill px-4 fw-semibold">
              Browse All Experiences
            </Link>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <h2 className="display-6 fw-bold mb-3">Our Location</h2>
              <p className="text-muted lh-lg">
                We are based in <strong>Kisoro Town</strong>, nestled in the far southwestern corner
                of Uganda. Kisoro is the closest town to both Bwindi Impenetrable National Park and
                Mgahinga Gorilla National Park, making it the ideal base for exploring the Virunga
                region.
              </p>
              <p className="text-muted lh-lg">
                Kisoro is also just a short drive from the Rwandan border, offering easy access to
                Kigali and the wider Great Lakes region. Whether you're arriving from Kampala, Kigali,
                or elsewhere, we can help arrange your transport and logistics.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-center gap-2"><FiMapPin className="text-success" /> <strong>Address:</strong> {COMPANY_INFO.address}</li>
                <li className="mb-2 d-flex align-items-center gap-2"><FiPhone className="text-success" /> <strong>Phone:</strong> {COMPANY_INFO.phone}</li>
                <li className="mb-2 d-flex align-items-center gap-2"><FiMail className="text-success" /> <strong>Email:</strong> {COMPANY_INFO.email}</li>
              </ul>
            </Col>
            <Col lg={6}>
              <div className="bg-white rounded-3 shadow p-3">
                <img
                  src="/images/kisoro-map.jpg"
                  alt="Map showing Kisoro location in Uganda"
                  className="w-100 rounded-3"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://placehold.co/600x400/e8f5e9/2d6a4f?text=Kisoro,+Uganda+%F0%9F%93%8D';
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5">
        <Container>
          <BookingCTA />
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
