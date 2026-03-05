import { useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { FaPaw, FaMountain, FaTheaterMasks, FaLeaf, FaCity } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import ExperienceCard from '../components/ExperienceCard';
import { experiences, type Experience } from '../data/experiences';

const categories: { value: string; label: string; icon: React.ReactNode }[] = [
  { value: 'all', label: 'All Experiences', icon: null },
  { value: 'wildlife', label: 'Wildlife', icon: <FaPaw className="me-1" /> },
  { value: 'adventure', label: 'Adventure', icon: <FaMountain className="me-1" /> },
  { value: 'cultural', label: 'Cultural', icon: <FaTheaterMasks className="me-1" /> },
  { value: 'nature', label: 'Nature', icon: <FaLeaf className="me-1" /> },
  { value: 'city', label: 'City', icon: <FaCity className="me-1" /> },
];

const ExperiencesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExperiences = experiences.filter((exp: Experience) => {
    const matchesCategory = activeCategory === 'all' || exp.category === activeCategory;
    const matchesSearch =
      searchTerm === '' ||
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="All Experiences & Tours | Kisoro, Uganda | Virunga Adventure Tours"
        description="Browse all tours and experiences in Kisoro, Uganda. Gorilla trekking, volcano hiking, golden monkey tracking, cultural tours, boat rides, and more."
        keywords={[
          'Kisoro tours',
          'Uganda experiences',
          'things to do in Kisoro',
          'Bwindi tours',
          'Mgahinga activities',
          'Kisoro tourism',
        ]}
        canonicalUrl="/experiences"
      />

      {/* Page Header */}
      <section className="page-header bg-success text-white py-5">
        <Container className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Our Experiences</h1>
              <p className="fs-5 opacity-75">
                Discover unforgettable adventures in Kisoro and the Virunga region. From gorilla
                trekking to cultural immersions — find your perfect experience.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-4 bg-light border-bottom">
        <Container>
          <Row className="align-items-center gy-3">
            <Col md={6}>
              <div className="d-flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    className={`btn btn-sm rounded-pill px-3 ${
                      activeCategory === cat.value
                        ? 'btn-success'
                        : 'btn-outline-secondary'
                    }`}
                    onClick={() => setActiveCategory(cat.value)}
                  >
                    {cat.icon}{cat.label}
                  </button>
                ))}
              </div>
            </Col>
            <Col md={6}>
              <InputGroup>
                <InputGroup.Text className="bg-white border-end-0">
                  <FiSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search experiences..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-start-0"
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience Grid */}
      <section className="py-5">
        <Container>
          {filteredExperiences.length > 0 ? (
            <Row className="gy-4">
              {filteredExperiences.map((exp) => (
                <Col lg={4} md={6} key={exp.id}>
                  <ExperienceCard experience={exp} />
                </Col>
              ))}
            </Row>
          ) : (
            <div className="text-center py-5">
              <p className="fs-5 text-muted">
                No experiences found matching your criteria. Try a different search or category.
              </p>
              <button
                className="btn btn-outline-success rounded-pill"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default ExperiencesPage;
