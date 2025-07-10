import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5725823/pexels-photo-5725823.jpeg')`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">
            Get in touch with the ECO GARDEN team

          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We'd love to hear from you! Whether you have questions about our programs, 
                want to get involved, or are interested in starting a similar initiative 
                at your school, we're here to help.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p>info@greenrootscollective.org</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📱</div>
                  <div className="method-content">
                    <h3>Phone</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>Location</h3>
                    <p>Campus Garden, University Center<br/>123 University Drive<br/>Green City, GC 12345</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">🕒</div>
                  <div className="method-content">
                    <h3>Garden Hours</h3>
                    <p>Mon-Fri: 8:00 AM - 6:00 PM<br/>Sat-Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send us a Message</h3>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4">Visit Our Garden</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-icon">🗺️</div>
                <h3>Campus Garden Location</h3>
                <p>Find us at the University Center, between the Student Union and the Biology Building.</p>
                <button className="btn btn-secondary">View on Google Maps</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-4">Follow Our Journey</h2>
          <div className="social-links">
            <a href="#" className="social-link">
              <div className="social-icon">📘</div>
              <span>Facebook</span>
            </a>
            <a href="#" className="social-link">
              <div className="social-icon">📷</div>
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link">
              <div className="social-icon">🐦</div>
              <span>Twitter</span>
            </a>
            <a href="#" className="social-link">
              <div className="social-icon">💼</div>
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-link">
              <div className="social-icon">📺</div>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I get involved?</h3>
              <p>
                Visit our Get Involved page to learn about volunteer opportunities, 
                or attend one of our weekly workdays every Tuesday at 3 PM.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do I need gardening experience?</h3>
              <p>
                Not at all! We welcome people of all skill levels. Our experienced 
                members are always happy to teach and share knowledge.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I visit the garden anytime?</h3>
              <p>
                The garden is open during daylight hours, but we recommend visiting 
                during our scheduled events for the best experience.
              </p>
            </div>
            <div className="faq-item">
              <h3>How can I donate to the project?</h3>
              <p>
                You can support us through monetary donations or by purchasing items 
                from our wishlist. Contact us for more information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;