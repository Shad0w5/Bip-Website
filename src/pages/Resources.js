import React, { useState } from 'react';
import { mockData } from '../data/mockData';
import './Resources.css';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredResources = selectedCategory === 'all' 
    ? mockData.resources 
    : mockData.resources.filter(resource => resource.type.toLowerCase() === selectedCategory);

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5217779/pexels-photo-5217779.jpeg')`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Resources & Learning</h1>
          <p className="hero-subtitle">
            Downloadable guides, videos, and educational materials for sustainable gardening
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding">
        <div className="container">
          <div className="category-filters">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Resources
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'pdf' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('pdf')}
            >
              📄 PDF Guides
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'video' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('video')}
            >
              🎥 Video Tutorials
            </button>
          </div>

          <div className="resources-grid">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="resource-card">
                <div className="resource-icon">
                  {resource.type === 'PDF' ? '📄' : '🎥'}
                </div>
                <div className="resource-content">
                  <h3>{resource.title}</h3>
                  <p className="resource-description">{resource.description}</p>
                  <div className="resource-meta">
                    {resource.type === 'PDF' ? (
                      <span className="resource-size">Size: {resource.size}</span>
                    ) : (
                      <span className="resource-duration">Duration: {resource.duration}</span>
                    )}
                  </div>
                  <button className="btn btn-primary">
                    {resource.type === 'PDF' ? 'Download PDF' : 'Watch Video'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4">Latest Blog Posts</h2>
          <div className="blog-grid">
            {mockData.blogPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="blog-author">by {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <button className="btn btn-secondary">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Pathways */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-4">Learning Pathways</h2>
          <div className="pathways-grid">
            <div className="pathway-card">
              <div className="pathway-icon">🌱</div>
              <h3>Beginner Gardener</h3>
              <p>Start your sustainable gardening journey with basic techniques and principles.</p>
              <ul className="pathway-steps">
                <li>✓ Soil preparation basics</li>
                <li>✓ Seed starting guide</li>
                <li>✓ Composting fundamentals</li>
                <li>✓ Basic plant care</li>
              </ul>
              <button className="btn btn-primary">Start Learning</button>
            </div>
            
            <div className="pathway-card">
              <div className="pathway-icon">🌿</div>
              <h3>Intermediate Grower</h3>
              <p>Expand your knowledge with advanced techniques and sustainable practices.</p>
              <ul className="pathway-steps">
                <li>✓ Permaculture principles</li>
                <li>✓ Companion planting</li>
                <li>✓ Natural pest management</li>
                <li>✓ Season extension</li>
              </ul>
              <button className="btn btn-primary">Continue Learning</button>
            </div>
            
            <div className="pathway-card">
              <div className="pathway-icon">🌳</div>
              <h3>Expert Cultivator</h3>
              <p>Master sustainable systems and become a community garden leader.</p>
              <ul className="pathway-steps">
                <li>✓ Ecosystem design</li>
                <li>✓ Community education</li>
                <li>✓ Project management</li>
                <li>✓ Leadership development</li>
              </ul>
              <button className="btn btn-primary">Master Skills</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding" style={{ backgroundColor: '#228B22', color: 'white' }}>
        <div className="container">
          <div className="newsletter-section">
            <h2>Stay Updated</h2>
            <p>Get monthly updates on new resources, garden progress, and upcoming events.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit" className="btn btn-secondary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;