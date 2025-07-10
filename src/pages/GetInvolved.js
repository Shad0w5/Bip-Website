import React, { useState } from 'react';
import { mockData } from '../data/mockData';
import './GetInvolved.css';

const GetInvolved = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    year: '',
    interests: '',
    availability: '',
    experience: ''
  });

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setVolunteerForm({
      name: '',
      email: '',
      year: '',
      interests: '',
      availability: '',
      experience: ''
    });
  };

  const handleInputChange = (e) => {
    setVolunteerForm({
      ...volunteerForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="get-involved-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1492496913980-501348b61469')`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Get Involved</h1>
          <p className="hero-subtitle">
            Join our community and help cultivate a sustainable future
          </p>
        </div>
      </section>

      {/* Volunteer Signup Form */}
      <section className="section-padding">
        <div className="container">
          <div className="volunteer-section">
            <div className="volunteer-info">
              <h2>Become a Volunteer</h2>
              <p>
                Whether you're a seasoned gardener or just starting your green journey, 
                we have opportunities for everyone. Join our passionate community of 
                students working to create positive environmental change.
              </p>
              <div className="volunteer-benefits">
                <h3>Why Volunteer?</h3>
                <ul>
                  <li>🌱 Learn sustainable gardening techniques</li>
                  <li>🤝 Build community connections</li>
                  <li>📚 Gain hands-on environmental education</li>
                  <li>🏆 Develop leadership skills</li>
                  <li>🎓 Academic credit opportunities</li>
                </ul>
              </div>
            </div>
            <div className="volunteer-form-container">
              <form onSubmit={handleVolunteerSubmit} className="volunteer-form">
                <h3>Volunteer Application</h3>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={volunteerForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={volunteerForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="year"
                    value={volunteerForm.year}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="graduate">Graduate Student</option>
                    <option value="staff">Staff/Faculty</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="interests"
                    placeholder="What interests you most about sustainable gardening?"
                    value={volunteerForm.interests}
                    onChange={handleInputChange}
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <select
                    name="availability"
                    value={volunteerForm.availability}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Availability</option>
                    <option value="weekday-mornings">Weekday Mornings</option>
                    <option value="weekday-afternoons">Weekday Afternoons</option>
                    <option value="weekends">Weekends</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="experience"
                    placeholder="Any gardening or environmental experience? (Optional)"
                    value={volunteerForm.experience}
                    onChange={handleInputChange}
                    rows="2"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Apply to Volunteer</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4">Volunteer Roles</h2>
          <div className="roles-grid">
            {mockData.volunteerRoles.map((role) => (
              <div key={role.id} className="role-card">
                <h3>{role.title}</h3>
                <p className="role-description">{role.description}</p>
                <div className="role-commitment">
                  <strong>Time Commitment:</strong> {role.timeCommitment}
                </div>
                <div className="role-perks">
                  <strong>Perks:</strong>
                  <ul>
                    {role.perks.map((perk, index) => (
                      <li key={index}>{perk}</li>
                    ))}
                  </ul>
                </div>
                <div className="role-skills">
                  <strong>Skills Needed:</strong>
                  <div className="skills-tags">
                    {role.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation/Wishlist Section */}
      <section className="section-padding">
        <div className="container">
          <div className="donation-section">
            <div className="donation-info">
              <h2>Support Our Mission</h2>
              <p>
                Help us grow! Your donations and wishlist contributions directly support 
                our educational programs, garden infrastructure, and community events.
              </p>
              <div className="donation-options">
                <button className="btn btn-primary">Donate Now</button>
                <button className="btn btn-secondary">Monthly Giving</button>
              </div>
            </div>
            <div className="wishlist-section">
              <h3>Current Wishlist</h3>
              <div className="wishlist-items">
                {mockData.wishlistItems.map((item, index) => (
                  <div key={index} className={`wishlist-item priority-${item.priority}`}>
                    <div className="item-info">
                      <h4>{item.item}</h4>
                      <div className="item-cost">${item.cost}</div>
                    </div>
                    <div className="item-priority">
                      <span className={`priority-badge ${item.priority}`}>
                        {item.priority} priority
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4">Community Impact</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="stat-number">127</div>
              <div className="stat-label">Active Volunteers</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">450kg</div>
              <div className="stat-label">Compost Created</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">24</div>
              <div className="stat-label">Community Events</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">1,250kg</div>
              <div className="stat-label">CO₂ Sequestered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;