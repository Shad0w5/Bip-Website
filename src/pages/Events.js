import React, { useState } from 'react';
import { mockData } from '../data/mockData';
import './Events.css';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    interests: ''
  });

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    alert(`Registration submitted for ${selectedEvent.title}!`);
    setRegistrationForm({ name: '', email: '', phone: '', interests: '' });
    setSelectedEvent(null);
  };

  const handleInputChange = (e) => {
    setRegistrationForm({
      ...registrationForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563281709-7af174759d98')`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Events & Workshops</h1>
          <p className="hero-subtitle">
            Join our community events and hands-on learning experiences
          </p>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-4">Upcoming Events</h2>
          <div className="events-grid">
            {mockData.events.map((event) => (
              <div key={event.id} className="event-card" onClick={() => handleEventClick(event)}>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-type">{event.type}</div>
                </div>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <div className="event-date">
                    📅 {new Date(event.date).toLocaleDateString()} at {event.time}
                  </div>
                  <p className="event-description">{event.description}</p>
                  <div className="event-capacity">
                    👥 {event.registered}/{event.capacity} registered
                  </div>
                  <div className="capacity-bar">
                    <div 
                      className="capacity-fill"
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4">Past Events</h2>
          <div className="past-events-gallery">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1492496913980-501348b61469" alt="Composting Workshop" />
              <div className="gallery-overlay">
                <h3>Composting Workshop</h3>
                <p>"Learned so much about turning waste into garden gold!" - Sarah M.</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.pexels.com/photos/927890/pexels-photo-927890.jpeg" alt="Seed Starting Class" />
              <div className="gallery-overlay">
                <h3>Seed Starting Class</h3>
                <p>"Perfect introduction to growing plants from seed." - Mike D.</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1705083717066-cafd1845e6a6" alt="Pollinator Garden Tour" />
              <div className="gallery-overlay">
                <h3>Pollinator Garden Tour</h3>
                <p>"Amazing to see how many butterflies we're attracting!" - Emma L.</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.pexels.com/photos/5217779/pexels-photo-5217779.jpeg" alt="Tool Making Workshop" />
              <div className="gallery-overlay">
                <h3>Tool Making Workshop</h3>
                <p>"Built my own garden tools - so rewarding!" - Alex R.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration Modal */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedEvent(null)}>×</button>
            <div className="modal-header">
              <img src={selectedEvent.image} alt={selectedEvent.title} />
              <div className="modal-event-info">
                <h2>{selectedEvent.title}</h2>
                <p className="modal-date">
                  📅 {new Date(selectedEvent.date).toLocaleDateString()} at {selectedEvent.time}
                </p>
                <p className="modal-capacity">
                  👥 {selectedEvent.registered}/{selectedEvent.capacity} registered
                </p>
              </div>
            </div>
            <div className="modal-body">
              <p>{selectedEvent.description}</p>
              <form onSubmit={handleRegistrationSubmit} className="registration-form">
                <h3>Register for this event</h3>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={registrationForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={registrationForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={registrationForm.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="interests"
                    placeholder="What interests you most about this event?"
                    value={registrationForm.interests}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Register Now</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;