import { useParams, Link } from 'react-router-dom';
import { Container, Breadcrumb } from 'react-bootstrap';
import SEOHead from '../components/SEOHead';
import ExperienceDetails from '../components/ExperienceDetails';
import { getExperienceBySlug } from '../data/experiences';

const ExperienceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const experience = slug ? getExperienceBySlug(slug) : undefined;

  if (!experience) {
    return (
      <>
        <SEOHead
          title="Experience Not Found | Virunga Adventure Tours"
          description="The requested experience could not be found."
        />
        <Container className="py-5 text-center" style={{ minHeight: '60vh' }}>
          <div className="py-5">
            <h1 className="display-4 fw-bold mb-3">Experience Not Found</h1>
            <p className="text-muted fs-5 mb-4">
              Sorry, we couldn't find the experience you're looking for.
            </p>
            <Link to="/experiences" className="btn btn-success rounded-pill px-4">
              Browse All Experiences
            </Link>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={experience.seo.title}
        description={experience.seo.description}
        keywords={experience.seo.keywords}
        canonicalUrl={`/experiences/${experience.slug}`}
        ogImage={experience.heroImage}
      />

      <Container className="py-4">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/experiences' }}>
            Experiences
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{experience.title}</Breadcrumb.Item>
        </Breadcrumb>

        <ExperienceDetails experience={experience} />
      </Container>
    </>
  );
};

export default ExperienceDetailPage;
