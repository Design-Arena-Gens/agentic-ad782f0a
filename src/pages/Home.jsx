import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMagic, FaClock, FaShieldAlt, FaMobile } from 'react-icons/fa';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h1>Try Before You Buy</h1>
              <p>Experience the future of online shopping with our AI-powered virtual dress try-on</p>
              <Button as={Link} to="/tryon" className="btn-custom me-3">Start Trying Now</Button>
              <Button as={Link} to="/collection" className="btn-outline-custom">Browse Collection</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <h2 className="section-title">Why Choose VirtualTryOn?</h2>
          <p className="section-subtitle">Experience the revolution in online fashion shopping</p>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="feature-card">
                <Card.Body className="text-center">
                  <FaMagic className="feature-icon" />
                  <h3>AI-Powered</h3>
                  <p>Advanced AI technology for realistic virtual try-on experience</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="feature-card">
                <Card.Body className="text-center">
                  <FaClock className="feature-icon" />
                  <h3>Instant Results</h3>
                  <p>See how you look in seconds, no waiting required</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="feature-card">
                <Card.Body className="text-center">
                  <FaShieldAlt className="feature-icon" />
                  <h3>100% Private</h3>
                  <p>Your photos are secure and never stored on our servers</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="feature-card">
                <Card.Body className="text-center">
                  <FaMobile className="feature-icon" />
                  <h3>Mobile Ready</h3>
                  <p>Try on dresses from any device, anywhere</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section bg-light">
        <Container>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Get started in three simple steps</p>
          <Row className="g-4">
            <Col md={4}>
              <div className="step-card">
                <div className="step-number">1</div>
                <h4>Upload Your Photo</h4>
                <p>Take or upload a clear photo of yourself. Our AI works best with front-facing photos.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="step-card">
                <div className="step-number">2</div>
                <h4>Choose a Dress</h4>
                <p>Browse our collection and select any dress you'd like to try on virtually.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="step-card">
                <div className="step-number">3</div>
                <h4>See the Magic</h4>
                <p>Watch as our AI instantly shows you how the dress looks on you!</p>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/tryon" className="btn-custom" size="lg">Try It Now</Button>
          </div>
        </Container>
      </section>

      {/* Featured Collection */}
      <section className="py-5">
        <Container>
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-subtitle">Explore our latest trending styles</p>
          <Row className="g-4">
            <Col md={4}>
              <Card className="collection-card">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop"
                  alt="Elegant Evening Dress"
                />
                <Card.Body>
                  <Card.Title>Evening Elegance</Card.Title>
                  <Card.Text>Perfect for special occasions and formal events</Card.Text>
                  <Button as={Link} to="/collection" className="btn-custom">View Collection</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="collection-card">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop"
                  alt="Casual Summer Dress"
                />
                <Card.Body>
                  <Card.Title>Casual Chic</Card.Title>
                  <Card.Text>Comfortable and stylish everyday wear</Card.Text>
                  <Button as={Link} to="/collection" className="btn-custom">View Collection</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="collection-card">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=300&fit=crop"
                  alt="Professional Business Dress"
                />
                <Card.Body>
                  <Card.Title>Business Professional</Card.Title>
                  <Card.Text>Make an impression in the boardroom</Card.Text>
                  <Button as={Link} to="/collection" className="btn-custom">View Collection</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
