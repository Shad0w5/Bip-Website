import React from 'react';
import { mockData } from '../data/mockData';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563281709-7af174759d98')`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">About ECO GARDEN</h1>

          <p className="hero-subtitle">
            Growing sustainable communities through education and action
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                 Eco Garden is a student-led initiative dedicated to creating sustainable, 
                educational garden spaces that foster environmental stewardship and community connection. 
                We believe that hands-on learning in nature is the key to developing the next generation 
                of environmental leaders.
              </p>
              <p>
                Through our diverse garden projects, workshops, and community events, we provide 
                students and community members with practical skills in sustainable agriculture, 
                composting, and ecological design while building a stronger, more connected community.
              </p>
            </div>
            <div className="mission-image">
              <img src="https://images.pexels.com/photos/2926581/pexels-photo-2926581.jpeg" alt="Our Mission" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="vision-content">
            <div className="vision-image">
              <img src="https://images.unsplash.com/photo-1708255562409-eb269c66c9f1" alt="Our Vision" />
            </div>
            <div className="vision-text">
              <h2>Our Vision</h2>
              <p>
                We envision a future where every student has access to hands-on environmental 
                education and the tools to create positive change in their communities. Our goal 
                is to establish a network of student-led garden initiatives that serve as living 
                laboratories for sustainable practices.
              </p>
              <p>
                By 2030, we aim to have engaged over 1,000 students, sequestered 10 tons of CO₂, 
                and created a model for sustainable campus living that can be replicated at 
                institutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Team</h2>
          <div className="team-grid">
            {mockData.teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4">Our Partners</h2>
          <div className="partners-grid">
            {mockData.partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">{partner.logo}</div>
                <h3>{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-4">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We prioritize environmental stewardship in all our practices and decisions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We believe in the power of collective action and inclusive participation.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3>Education</h3>
              <p>We provide hands-on learning opportunities that inspire lifelong growth.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Innovation</h3>
              <p>We embrace creative solutions to environmental and social challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;