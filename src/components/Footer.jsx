import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTshirt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>
              <FaTshirt className="me-2" />
              VirtualTryOn
            </h5>
            <p>Experience the future of online shopping with our virtual dress try-on technology. Try before you buy!</p>
            <div className="social-icons mt-3">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tryon">Try On</Link></li>
              <li><Link to="/collection">Collection</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contact Info</h5>
            <ul>
              <li>Email: info@virtualtryon.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Fashion Street, NY 10001</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 VirtualTryOn. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
