import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../data/mockData';

const Home = () => {
  const [stats, setStats] = useState({
    students: 0,
    compost: 0,
    species: 0
  });

  useEffect(() => {
    // Animate stats on load
    const animateStats = () => {
      const targetStats = mockData.stats;
      const duration = 2000;
      const steps = 60;
      const increment = {
        students: targetStats.students / steps,
        compost: targetStats.compost / steps,
        species: targetStats.species / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setStats({
          students: Math.floor(increment.students * currentStep),
          compost: Math.floor(increment.compost * currentStep),
          species: Math.floor(increment.species * currentStep)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targetStats);
        }
      }, duration / steps);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  // Water stat (no animation needed)
  const waterCaptured = 117150; // Liters per year, from your doc

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1717607423584-49450c57d361')`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Eco Garden</h1>
          <p className="hero-subtitle">
            Cultivating sustainable futures through student-led ecological gardening
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{stats.students}+</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.compost}kg</div>
              <div className="stat-label">Compost Created</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.species}+</div>
              <div className="stat-label">Plant Species</div>
            </div>
            {/* WATER CARD - NEW */}
            <div className="stat-card">
              <div className="stat-number">{waterCaptured.toLocaleString()}L</div>
              <div className="stat-label">Rainwater Captured</div>
            </div>
          </div>
          
          <div className="hero-buttons">
            <Link to="/garden" className="btn btn-primary">Explore Our Garden</Link>
            <Link to="/get-involved" className="btn btn-secondary">Get Involved</Link>
          </div>
        </div>
      </section>
      
      {/* You can add more sections for About, Features, etc. here */}


      {/* Quick Navigation */}
      <section className="section-padding">
        <div className="container">
          <div className="quick-nav-grid">
            <div className="quick-nav-card">
              <img src="https://images.unsplash.com/photo-1563281709-7af174759d98" alt="About Us" />
              <h3>About Our Mission</h3>
              <p>Learn about our commitment to sustainable education and community building.</p>
              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
            
            <div className="quick-nav-card">
              <img src="https://images.pexels.com/photos/927890/pexels-photo-927890.jpeg" alt="The Garden" />
              <h3>Explore The Garden</h3>
              <p>Take a virtual tour of our diverse ecological garden spaces.</p>
              <Link to="/garden" className="btn btn-primary">Explore</Link>
            </div>
            
            <div className="quick-nav-card">
              <img src="https://images.unsplash.com/photo-1492496913980-501348b61469" alt="Get Involved" />
              <h3>Join Our Community</h3>
              <p>Volunteer, learn, and grow with us in our sustainable gardening journey.</p>
              <Link to="/get-involved" className="btn btn-primary">Join Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4">Latest Updates</h2>
          <div className="featured-content">
            <div className="featured-item">
              <img src="https://images.pexels.com/photos/2926581/pexels-photo-2926581.jpeg" alt="Recent Workshop" />
              <div className="featured-content-text">
                <h3>Spring Planting Workshop Success</h3>
                <p>Over 50 students participated in our recent spring planting workshop, learning sustainable gardening techniques and planting native species.</p>
                <Link to="/events" className="btn btn-secondary">View All Events</Link>
              </div>
            </div>
            
            <div className="featured-item">
              <img src="https://images.unsplash.com/photo-1705083717066-cafd1845e6a6" alt="Biodiversity Impact" />
              <div className="featured-content-text">
                <h3>Biodiversity Milestone Reached</h3>
                <p>We're proud to announce that our garden now hosts over 100 different plant species, supporting local wildlife and pollinators.</p>
                <Link to="/impact" className="btn btn-secondary">Impact Dashboard</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;