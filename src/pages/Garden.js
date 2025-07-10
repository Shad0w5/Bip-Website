import React, { useState } from 'react';
import { mockData } from '../data/mockData';
import './Garden.css';

const Garden = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const closeModal = () => {
    setSelectedSection(null);
  };

  return (
    <div className="garden-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1717607423584-49450c57d361')`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">The Garden</h1>
          <p className="hero-subtitle">
            Explore our diverse ecological spaces and sustainable growing systems
          </p>
        </div>
      </section>

      {/* Interactive Garden Map */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-4">Interactive Garden Map</h2>
          <div className="garden-map-container">
            <div className="garden-map">
              {mockData.gardenSections.map((section) => (
                <div
                  key={section.id}
                  className="garden-section-marker"
                  style={{
                    left: `${section.coordinates.x}%`,
                    top: `${section.coordinates.y}%`
                  }}
                  onClick={() => handleSectionClick(section)}
                >
                  <div className="marker-dot"></div>
                  <div className="marker-label">{section.name}</div>
                </div>
              ))}
              <img 
                src="https://images.unsplash.com/photo-1717607423584-49450c57d361" 
                alt="Garden Overview" 
                className="garden-background"
              />
            </div>
            <div className="map-legend">
              <h3>Garden Sections</h3>
              <ul>
                {mockData.gardenSections.map((section) => (
                  <li key={section.id} onClick={() => handleSectionClick(section)}>
                    {section.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4">Garden Transformation</h2>
          <div className="before-after-container">
            <div className="before-after-slider">
              <div className="before-image">
                <img src="https://images.unsplash.com/photo-1492496913980-501348b61469" alt="Before" />
                <div className="image-label">Before</div>
              </div>
              <div 
                className="after-image"
                style={{ clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)` }}
              >
                <img src="https://images.unsplash.com/photo-1717607423584-49450c57d361" alt="After" />
                <div className="image-label">After</div>
              </div>
              <div className="slider-handle" style={{ left: `${beforeAfterSlider}%` }}>
                <div className="handle-line"></div>
                <div className="handle-circle"></div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={beforeAfterSlider}
                onChange={(e) => setBeforeAfterSlider(e.target.value)}
                className="slider-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Garden Infographics */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-4">How It Works</h2>
          <div className="infographics-grid">
            {/* Compost Cycle */}
            <div className="infographic-card">
              <h3>Compost Cycle</h3>
              <div className="infographic-content">
                <div className="cycle-step">
                  <div className="step-icon">🍃</div>
                  <div className="step-text">Organic Waste</div>
                </div>
                <div className="cycle-arrow">→</div>
                <div className="cycle-step">
                  <div className="step-icon">🦠</div>
                  <div className="step-text">Decomposition</div>
                </div>
                <div className="cycle-arrow">→</div>
                <div className="cycle-step">
                  <div className="step-icon">🌱</div>
                  <div className="step-text">Rich Compost</div>
                </div>
                <div className="cycle-arrow">→</div>
                <div className="cycle-step">
                  <div className="step-icon">🌿</div>
                  <div className="step-text">Healthy Plants</div>
                </div>
              </div>
            </div>

            {/* Rainwater Harvesting */}
            <div className="infographic-card">
              <h3>Rainwater Harvesting</h3>
              <div className="infographic-content">
                <div className="water-system">
                  <div className="water-step">
                    <div className="step-icon">☔</div>
                    <div className="step-text">Rain Collection</div>
                  </div>
                  <div className="water-step">
                    <div className="step-icon">🪣</div>
                    <div className="step-text">Storage Barrels</div>
                  </div>
                  <div className="water-step">
                    <div className="step-icon">💧</div>
                    <div className="step-text">Irrigation System</div>
                  </div>
                  <div className="water-step">
                    <div className="step-icon">🌺</div>
                    <div className="step-text">Garden Watering</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pollinator Pathway */}
            <div className="infographic-card">
              <h3>Pollinator Pathway</h3>
              <div className="infographic-content">
                <div className="pollinator-system">
                  <div className="pollinator-step">
                    <div className="step-icon">🌸</div>
                    <div className="step-text">Native Flowers</div>
                  </div>
                  <div className="pollinator-step">
                    <div className="step-icon">🐝</div>
                    <div className="step-text">Attract Pollinators</div>
                  </div>
                  <div className="pollinator-step">
                    <div className="step-icon">🦋</div>
                    <div className="step-text">Biodiversity</div>
                  </div>
                  <div className="pollinator-step">
                    <div className="step-icon">🍎</div>
                    <div className="step-text">Fruit Production</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Details Modal */}
      {selectedSection && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image">
              <img src={selectedSection.image} alt={selectedSection.name} />
            </div>
            <div className="modal-info">
              <h2>{selectedSection.name}</h2>
              <p>{selectedSection.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Garden;