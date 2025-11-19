import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

function Collection() {
  const [filter, setFilter] = useState('all');

  const dresses = [
    {
      id: 1,
      name: 'Elegant Red Evening Gown',
      category: 'evening',
      price: 299,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop'
    },
    {
      id: 2,
      name: 'Blue Cocktail Dress',
      category: 'cocktail',
      price: 189,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop'
    },
    {
      id: 3,
      name: 'White Summer Dress',
      category: 'casual',
      price: 129,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop'
    },
    {
      id: 4,
      name: 'Black Evening Dress',
      category: 'evening',
      price: 349,
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop'
    },
    {
      id: 5,
      name: 'Pink Party Dress',
      category: 'party',
      price: 199,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop'
    },
    {
      id: 6,
      name: 'Green Maxi Dress',
      category: 'casual',
      price: 159,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop'
    },
    {
      id: 7,
      name: 'Navy Blue Gown',
      category: 'evening',
      price: 279,
      image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=500&fit=crop'
    },
    {
      id: 8,
      name: 'Floral Sundress',
      category: 'casual',
      price: 99,
      image: 'https://images.unsplash.com/photo-1572495532056-8583af1cbae1?w=400&h=500&fit=crop'
    },
    {
      id: 9,
      name: 'Gold Cocktail Dress',
      category: 'cocktail',
      price: 249,
      image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3ce?w=400&h=500&fit=crop'
    }
  ];

  const filteredDresses = filter === 'all'
    ? dresses
    : dresses.filter(dress => dress.category === filter);

  return (
    <section className="py-5">
      <Container>
        <h1 className="section-title">Our Collection</h1>
        <p className="section-subtitle">Discover your perfect dress from our curated collection</p>

        {/* Filter Section */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-center flex-wrap gap-2">
              <Button
                variant={filter === 'all' ? 'primary' : 'outline-secondary'}
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'btn-custom' : ''}
              >
                All Dresses
              </Button>
              <Button
                variant={filter === 'evening' ? 'primary' : 'outline-secondary'}
                onClick={() => setFilter('evening')}
                className={filter === 'evening' ? 'btn-custom' : ''}
              >
                Evening
              </Button>
              <Button
                variant={filter === 'cocktail' ? 'primary' : 'outline-secondary'}
                onClick={() => setFilter('cocktail')}
                className={filter === 'cocktail' ? 'btn-custom' : ''}
              >
                Cocktail
              </Button>
              <Button
                variant={filter === 'casual' ? 'primary' : 'outline-secondary'}
                onClick={() => setFilter('casual')}
                className={filter === 'casual' ? 'btn-custom' : ''}
              >
                Casual
              </Button>
              <Button
                variant={filter === 'party' ? 'primary' : 'outline-secondary'}
                onClick={() => setFilter('party')}
                className={filter === 'party' ? 'btn-custom' : ''}
              >
                Party
              </Button>
            </div>
          </Col>
        </Row>

        {/* Collection Grid */}
        <Row className="g-4">
          {filteredDresses.map((dress) => (
            <Col key={dress.id} sm={6} md={4} lg={3}>
              <Card className="collection-card h-100">
                <Card.Img variant="top" src={dress.image} alt={dress.name} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ fontSize: '1.1rem' }}>{dress.name}</Card.Title>
                  <Card.Text className="text-muted text-capitalize">{dress.category}</Card.Text>
                  <div className="mt-auto">
                    <h4 className="text-primary mb-3">${dress.price}</h4>
                    <div className="d-flex gap-2">
                      <Button as={Link} to="/tryon" className="btn-custom flex-grow-1">
                        Try On
                      </Button>
                      <Button variant="outline-secondary">
                        <FaHeart />
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredDresses.length === 0 && (
          <Row className="mt-5">
            <Col className="text-center">
              <p className="text-muted">No dresses found in this category.</p>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}

export default Collection;
