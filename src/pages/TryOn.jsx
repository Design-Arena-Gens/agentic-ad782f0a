import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaUpload, FaImage } from 'react-icons/fa';

function TryOn() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDress, setSelectedDress] = useState(null);

  const dresses = [
    {
      id: 1,
      name: 'Red Evening Gown',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Blue Cocktail Dress',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'White Summer Dress',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Black Evening Dress',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Pink Party Dress',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Green Maxi Dress',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=400&fit=crop'
    }
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDressSelect = (dress) => {
    setSelectedDress(dress);
  };

  const handleTryOn = () => {
    if (selectedImage && selectedDress) {
      alert('Virtual Try-On feature will be processed! In a real implementation, this would use AI to overlay the dress on your photo.');
    } else {
      alert('Please upload your photo and select a dress first.');
    }
  };

  return (
    <section className="tryon-section">
      <Container>
        <h1 className="section-title">Virtual Try-On</h1>
        <p className="section-subtitle">Upload your photo and select a dress to see how it looks on you</p>

        <Row className="g-4">
          {/* Upload Section */}
          <Col lg={6}>
            <div className="tryon-container">
              <h3 className="mb-4">Step 1: Upload Your Photo</h3>
              <Form.Group>
                <Form.Label htmlFor="photo-upload" className="upload-area">
                  {selectedImage ? (
                    <div>
                      <img
                        src={selectedImage}
                        alt="Your uploaded"
                        style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '12px' }}
                      />
                      <p className="mt-3">Click to change photo</p>
                    </div>
                  ) : (
                    <div>
                      <FaUpload className="upload-icon" />
                      <h4>Upload Your Photo</h4>
                      <p>Click to browse or drag and drop</p>
                      <p className="text-muted">Supported formats: JPG, PNG (Max 5MB)</p>
                    </div>
                  )}
                </Form.Label>
                <Form.Control
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </Form.Group>
            </div>
          </Col>

          {/* Preview Section */}
          <Col lg={6}>
            <div className="tryon-container">
              <h3 className="mb-4">Preview</h3>
              {selectedImage && selectedDress ? (
                <div className="text-center">
                  <img
                    src={selectedDress.image}
                    alt={selectedDress.name}
                    style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '12px' }}
                  />
                  <h4 className="mt-3">{selectedDress.name}</h4>
                  <p className="text-muted">Selected for try-on</p>
                </div>
              ) : (
                <div className="text-center" style={{ padding: '3rem' }}>
                  <FaImage style={{ fontSize: '4rem', color: '#ccc' }} />
                  <p className="mt-3 text-muted">Your try-on preview will appear here</p>
                </div>
              )}
            </div>
          </Col>
        </Row>

        {/* Dress Selection */}
        <Row className="mt-4">
          <Col>
            <div className="tryon-container">
              <h3 className="mb-4">Step 2: Choose a Dress</h3>
              <div className="dress-selection">
                {dresses.map((dress) => (
                  <div
                    key={dress.id}
                    className={`dress-item ${selectedDress?.id === dress.id ? 'selected' : ''}`}
                    onClick={() => handleDressSelect(dress)}
                  >
                    <img src={dress.image} alt={dress.name} />
                    <p className="text-center mt-2 mb-0" style={{ fontSize: '0.9rem' }}>{dress.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Action Button */}
        <Row className="mt-4">
          <Col className="text-center">
            <Button
              className="btn-custom"
              size="lg"
              onClick={handleTryOn}
              disabled={!selectedImage || !selectedDress}
            >
              Try On Now
            </Button>
            {(!selectedImage || !selectedDress) && (
              <p className="text-muted mt-2">Please complete both steps above to proceed</p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TryOn;
