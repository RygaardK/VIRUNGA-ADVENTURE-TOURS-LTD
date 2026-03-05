import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { FaMotorcycle, FaCar, FaShip, FaCheck, FaTimes } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import TransportCard from '../components/TransportCard';
import BookingCTA from '../components/BookingCTA';
import WhatsAppButton, { whatsappMessages } from '../components/WhatsAppButton';
import { transportServices, airportTransfers, transportDescription } from '../data/transport';

const transportIconMap: Record<string, React.ReactNode> = {
  motorcycle: <FaMotorcycle />,
  car: <FaCar />,
  ship: <FaShip />,
};

const TransportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Transport Services | Kisoro, Uganda & Rwanda | Virunga Adventure Tours"
        description="Reliable transport in Uganda and Rwanda. 4x4 safari cars with driver, boda-boda motorcycles, boat transport on Lake Mutanda. Airport transfers from Entebbe, Kampala, Kigali."
        keywords={[
          'transport from Kigali to Kisoro',
          'transport from Entebbe to Bwindi',
          'Kisoro transport services',
          '4x4 car hire Uganda',
          'safari car with driver',
          'airport transfer Uganda',
          'Lake Mutanda boat transport',
        ]}
        canonicalUrl="/transport"
      />

      {/* Page Header */}
      <section className="page-header bg-success text-white py-5">
        <Container className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Transport Services</h1>
              <p className="fs-5 opacity-75">
                {transportDescription}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Transport Options */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Our Transport Options</h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
              Choose the transport that suits your trip. From budget motorcycles to premium safari vehicles.
            </p>
          </div>
          <Row className="gy-4">
            {transportServices.map((transport) => (
              <Col lg={4} md={6} key={transport.id}>
                <TransportCard transport={transport} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Airport Transfers */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Airport & City Transfers</h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '650px' }}>
              We arrange comfortable 4x4 transfers from all major arrival points in Uganda and Rwanda
              directly to Kisoro.
            </p>
          </div>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm rounded-3 overflow-hidden">
                <Table responsive className="mb-0">
                  <thead className="table-success">
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Duration</th>
                      <th>Estimated Price</th>
                      <th className="d-none d-md-table-cell">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {airportTransfers.map((transfer) => (
                      <tr key={transfer.id}>
                        <td className="fw-medium">{transfer.location}</td>
                        <td>{transfer.destination}</td>
                        <td>{transfer.estimatedDuration}</td>
                        <td className="fw-bold text-success">{transfer.estimatedPrice}</td>
                        <td className="text-muted small d-none d-md-table-cell">
                          {transfer.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Transport Comparison */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Compare Transport Options</h2>
          </div>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm rounded-3 overflow-hidden">
                <Table responsive className="mb-0 text-center">
                  <thead className="table-success">
                    <tr>
                      <th className="text-start">Feature</th>
                      {transportServices.map((t) => (
                        <th key={t.id}>{transportIconMap[t.icon] || t.icon} {t.name.split(' ')[0]}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start fw-medium">Starting Price</td>
                      {transportServices.map((t) => (
                        <td key={t.id} className="fw-bold text-success">{t.priceFrom}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="text-start fw-medium">Fuel Included</td>
                      {transportServices.map((t) => (
                        <td key={t.id}>{t.fuelIncluded ? <FaCheck className="text-success" /> : <FaTimes className="text-danger" />}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="text-start fw-medium">English Driver</td>
                      {transportServices.map((t) => (
                        <td key={t.id}>{t.englishDriver ? <FaCheck className="text-success" /> : <FaTimes className="text-danger" />}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="text-start fw-medium">Cross-Border</td>
                      {transportServices.map((t) => (
                        <td key={t.id}>{t.crossBorder ? <FaCheck className="text-success" /> : <FaTimes className="text-danger" />}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="text-start fw-medium">Airport Pickup</td>
                      {transportServices.map((t) => (
                        <td key={t.id}>{t.airportPickup.length > 0 ? <FaCheck className="text-success" /> : <FaTimes className="text-danger" />}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="text-start fw-medium">Pricing Model</td>
                      {transportServices.map((t) => (
                        <td key={t.id} className="small">{t.pricingModel}</td>
                      ))}
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-5">
        <Container className="text-center">
          <h3 className="fw-bold mb-3">Need Help Choosing?</h3>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '500px' }}>
            Message us on WhatsApp and we will recommend the best transport option for your trip.
          </p>
          <WhatsAppButton
            message={whatsappMessages.transport('the best')}
            label="Ask About Transport"
            size="lg"
          />
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

export default TransportPage;
