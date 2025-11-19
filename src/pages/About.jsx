import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBullseye, FaEye, FaUsers, FaStar } from 'react-icons/fa';

function About() {
  return (
    <>
      {/* About Hero */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h1>About VirtualTryOn</h1>
              <p>Revolutionizing online fashion shopping with cutting-edge AI technology</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story */}
      <section className="about-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop"
                alt="Fashion Shopping"
                className="about-image"
              />
            </Col>
            <Col lg={6}>
              <h2 className="mb-4">Our Story</h2>
              <p>
                VirtualTryOn was founded in 2023 with a simple mission: to make online fashion shopping as easy and
                confident as shopping in-store. We understand the frustration of ordering clothes online only to find
                they don't look quite right when they arrive.
              </p>
              <p>
                Using advanced artificial intelligence and computer vision technology, we've created a platform that
                lets you see exactly how any dress will look on you before making a purchase. No more guessing, no
                more returns – just confident, happy shopping.
              </p>
              <p>
                Today, we partner with hundreds of fashion brands and have helped millions of customers find their
                perfect outfit with confidence.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="feature-card">
                <Card.Body>
                  <FaBullseye className="feature-icon" />
                  <h3>Our Mission</h3>
                  <p>
                    To empower every online shopper with the confidence to make perfect fashion choices by providing
                    innovative virtual try-on technology that bridges the gap between online and in-store shopping
                    experiences.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="feature-card">
                <Card.Body>
                  <FaEye className="feature-icon" />
                  <h3>Our Vision</h3>
                  <p>
                    To become the world's leading virtual try-on platform, making online fashion shopping accessible,
                    sustainable, and enjoyable for everyone while reducing returns and environmental impact.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="about-section">
        <Container>
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          <Row className="g-4">
            <Col md={4}>
              <div className="step-card">
                <FaUsers style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h4>Customer First</h4>
                <p>
                  We put our customers at the heart of everything we do, constantly innovating to make their shopping
                  experience better.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="step-card">
                <FaStar style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h4>Innovation</h4>
                <p>
                  We embrace cutting-edge technology and continuously push the boundaries of what's possible in
                  virtual fashion.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="step-card">
                <FaBullseye style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h4>Sustainability</h4>
                <p>
                  By reducing returns and waste, we're committed to making fashion shopping more environmentally
                  responsible.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)', fontWeight: '700' }}>2M+</h2>
              <p className="text-muted">Happy Customers</p>
            </Col>
            <Col md={3} className="mb-4">
              <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)', fontWeight: '700' }}>500+</h2>
              <p className="text-muted">Brand Partners</p>
            </Col>
            <Col md={3} className="mb-4">
              <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)', fontWeight: '700' }}>10K+</h2>
              <p className="text-muted">Dress Styles</p>
            </Col>
            <Col md={3} className="mb-4">
              <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)', fontWeight: '700' }}>98%</h2>
              <p className="text-muted">Satisfaction Rate</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
