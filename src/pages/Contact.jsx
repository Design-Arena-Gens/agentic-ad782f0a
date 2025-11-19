import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {/* Contact Hero */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h1>Get In Touch</h1>
              <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-section">
        <Container>
          <Row className="g-4">
            {/* Contact Form */}
            <Col lg={7}>
              <div className="contact-form">
                <h2 className="mb-4">Send Us a Message</h2>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </Form.Group>
                  <Button type="submit" className="btn-custom" size="lg">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>

            {/* Contact Information */}
            <Col lg={5}>
              <div className="contact-info">
                <h2 className="mb-4">Contact Information</h2>
                <p className="mb-4">
                  Have a question? Feel free to reach out to us through any of the following channels.
                </p>

                <div className="contact-info-item">
                  <FaMapMarkerAlt className="contact-info-icon" />
                  <div>
                    <h5>Address</h5>
                    <p className="text-muted mb-0">123 Fashion Street<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <FaPhone className="contact-info-icon" />
                  <div>
                    <h5>Phone</h5>
                    <p className="text-muted mb-0">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <FaEnvelope className="contact-info-icon" />
                  <div>
                    <h5>Email</h5>
                    <p className="text-muted mb-0">info@virtualtryon.com<br />support@virtualtryon.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <FaClock className="contact-info-icon" />
                  <div>
                    <h5>Business Hours</h5>
                    <p className="text-muted mb-0">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <Container>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find quick answers to common questions</p>
          <Row className="g-4">
            <Col md={6}>
              <div className="step-card text-start">
                <h4>How does the virtual try-on work?</h4>
                <p>
                  Our AI technology analyzes your photo and overlays the selected dress to show you how it would look
                  on you in real-time.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="step-card text-start">
                <h4>Is my photo stored on your servers?</h4>
                <p>
                  No, we prioritize your privacy. All processing is done securely and your photos are never stored on
                  our servers.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="step-card text-start">
                <h4>Can I use this on mobile devices?</h4>
                <p>
                  Yes! Our platform is fully responsive and works seamlessly on all devices including smartphones and
                  tablets.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="step-card text-start">
                <h4>How accurate is the virtual try-on?</h4>
                <p>
                  Our AI provides a highly accurate representation, though actual fit may vary. We recommend checking
                  size guides for best results.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
