import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin, FiUsers, FiAward, FiStar } from 'react-icons/fi';
import SEOHead from '../components/SEOHead';
import ExperienceCard from '../components/ExperienceCard';
import BookingCTA from '../components/BookingCTA';
import { experiences, getFeaturedExperiences, COMPANY_INFO } from '../data/experiences';

const HomePage: React.FC = () => {
  const featured = getFeaturedExperiences();

  return (
    <>
      <SEOHead
        title="Virunga Adventure Tours | Gorilla Trekking & Tours in Kisoro, Uganda"
        description="Discover gorilla trekking, volcano hiking, golden monkey tracking, and cultural experiences in Kisoro, Uganda. Your gateway to Bwindi and Mgahinga National Parks."
        keywords={[
          'Kisoro tourism',
          'Uganda gorilla tours',
          'Bwindi gorilla trekking',
          'Mgahinga hiking',
          'things to do in Kisoro',
          'Lake Mutanda activities',
          'Virunga Adventure Tours',
        ]}
        canonicalUrl="/"
      />

      {/* Hero Section */}
      <section className="hero-section position-relative d-flex align-items-center">
        <div className="hero-bg position-absolute top-0 start-0 w-100 h-100">
          <img
            src="/images/hero-bg.jpg"
            alt="Virunga Mountains landscape in Kisoro, Uganda"
            className="w-100 h-100 object-fit-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/1920x800/1b4332/ffffff?text=Virunga+Adventure+Tours';
            }}
          />
          <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>
        <Container className="position-relative z-1 py-5">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-3 fw-bold text-white mb-3">
                Discover the Heart of <span className="text-warning">Uganda</span>
              </h1>
              <p className="fs-5 text-white opacity-75 mb-4 lh-lg">
                From gorilla trekking in Bwindi to volcano hiking in Mgahinga — explore unforgettable
                adventures in the stunning landscapes of Kisoro, southwestern Uganda.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button
                  as={Link as any}
                  to="/experiences"
                  variant="success"
                  size="lg"
                  className="rounded-pill px-4 fw-semibold d-flex align-items-center justify-content-center gap-2"
                >
                  Explore Experiences <FiArrowRight />
                </Button>
                <Button
                  as={Link as any}
                  to="/contact"
                  variant="outline-light"
                  size="lg"
                  className="rounded-pill px-4 fw-semibold"
                >
                  Contact Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="bg-success text-white py-4">
        <Container>
          <Row className="text-center gy-3">
            <Col sm={3} xs={6}>
              <div className="d-flex flex-column align-items-center">
                <FiMapPin size={24} className="mb-2 opacity-75" />
                <span className="fw-bold fs-4">{experiences.length}+</span>
                <span className="small opacity-75">Experiences</span>
              </div>
            </Col>
            <Col sm={3} xs={6}>
              <div className="d-flex flex-column align-items-center">
                <FiUsers size={24} className="mb-2 opacity-75" />
                <span className="fw-bold fs-4">500+</span>
                <span className="small opacity-75">Happy Travellers</span>
              </div>
            </Col>
            <Col sm={3} xs={6}>
              <div className="d-flex flex-column align-items-center">
                <FiAward size={24} className="mb-2 opacity-75" />
                <span className="fw-bold fs-4">100%</span>
                <span className="small opacity-75">Locally Owned</span>
              </div>
            </Col>
            <Col sm={3} xs={6}>
              <div className="d-flex flex-column align-items-center">
                <FiStar size={24} className="mb-2 opacity-75" />
                <span className="fw-bold fs-4">5★</span>
                <span className="small opacity-75">Rated Service</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Experiences */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Featured Experiences</h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
              Our most popular tours and activities — handpicked to give you the best of Kisoro and the
              Virunga region.
            </p>
          </div>
          <Row className="gy-4">
            {featured.map((exp) => (
              <Col lg={4} md={6} key={exp.id}>
                <ExperienceCard experience={exp} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button
              as={Link as any}
              to="/experiences"
              variant="outline-success"
              size="lg"
              className="rounded-pill px-4 fw-semibold"
            >
              View All Experiences <FiArrowRight />
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Why Choose Virunga Adventure Tours?</h2>
            <p className="text-muted fs-5">
              We're not just a tour company — we're your neighbours in Kisoro.
            </p>
          </div>
          <Row className="gy-4">
            {[
              {
                icon: '🦍',
                title: 'Local Expertise',
                text: 'Based in Kisoro, we have unmatched knowledge of Bwindi, Mgahinga, and the entire Virunga region. Our guides are born and raised here.',
              },
              {
                icon: '🌍',
                title: 'Responsible Tourism',
                text: 'We work directly with local communities, ensuring tourism benefits reach the people who make these experiences possible.',
              },
              {
                icon: '🎯',
                title: 'Customised Itineraries',
                text: 'Every traveller is different. We tailor each experience to your interests, budget, and schedule — from budget backpacker to luxury safari.',
              },
              {
                icon: '💬',
                title: 'Personal Service',
                text: 'From your first inquiry to your last day, you\'ll communicate directly with our team. No call centres, no middlemen — just genuine hospitality.',
              },
              {
                icon: '🏔️',
                title: 'Unique Access',
                text: 'Our local connections give you access to experiences you won\'t find in guidebooks — from hidden trails to private community visits.',
              },
              {
                icon: '✅',
                title: 'All-Inclusive Options',
                text: 'We handle permits, guides, transport, accommodation, and meals — so you can focus on enjoying the adventure.',
              },
            ].map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="border-0 shadow-sm h-100 rounded-3 p-3">
                  <Card.Body className="text-center">
                    <div className="fs-1 mb-3">{item.icon}</div>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text className="text-muted small">{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Preview */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <img
                src="/images/about-team.jpg"
                alt="Virunga Adventure Tours team in Kisoro"
                className="w-100 rounded-3 shadow"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://placehold.co/600x400/2d6a4f/ffffff?text=Our+Team';
                }}
              />
            </Col>
            <Col lg={6}>
              <h2 className="display-6 fw-bold mb-3">About {COMPANY_INFO.name}</h2>
              <p className="text-muted lh-lg">{COMPANY_INFO.description}</p>
              <Button
                as={Link as any}
                to="/about"
                variant="success"
                className="rounded-pill px-4 fw-semibold"
              >
                Learn More About Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Plan Your Trip */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Plan Your Trip</h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
              Everything you need for an unforgettable Kisoro adventure — activities, places to stay,
              and reliable transport.
            </p>
          </div>
          <Row className="gy-4">
            {[
              {
                icon: '🎒',
                title: 'Activities & Experiences',
                description:
                  'Gorilla trekking, volcano hiking, golden monkey tracking, cultural tours, and more. Over 11 unique adventures to choose from.',
                link: '/experiences',
                linkText: 'Browse Activities',
                color: 'success',
              },
              {
                icon: '🏨',
                title: 'Accommodation',
                description:
                  'Luxury lodges, eco camps, and budget hostels near Bwindi, Lake Mutanda, and Kisoro town. Low season and bundle discounts available.',
                link: '/accommodation',
                linkText: 'Find a Place to Stay',
                color: 'warning',
              },
              {
                icon: '🚗',
                title: 'Transport',
                description:
                  '4x4 safari cars, boda-boda motorcycles, and boat transport. Airport transfers from Entebbe, Kampala, and Kigali.',
                link: '/transport',
                linkText: 'View Transport Options',
                color: 'info',
              },
            ].map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="border-0 shadow-sm h-100 rounded-3 text-center p-3">
                  <Card.Body className="d-flex flex-column">
                    <div className="fs-1 mb-3">{item.icon}</div>
                    <Card.Title className="fw-bold mb-3">{item.title}</Card.Title>
                    <Card.Text className="text-muted small flex-grow-1">{item.description}</Card.Text>
                    <Link
                      to={item.link}
                      className={`btn btn-outline-${item.color} rounded-pill mt-3 fw-semibold`}
                    >
                      {item.linkText} <FiArrowRight />
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Link
              to="/packages"
              className="btn btn-success btn-lg rounded-pill px-5 fw-semibold d-inline-flex align-items-center gap-2"
            >
              View Tour Packages <FiArrowRight />
            </Link>
          </div>
        </Container>
      </section>

      {/* Booking CTA */}
      <section className="py-5 bg-light">
        <Container>
          <BookingCTA />
        </Container>
      </section>
    </>
  );
};

export default HomePage;
