import React, { useEffect, useRef } from 'react';
import { mockData } from '../data/mockData';
import './Impact.css';

const Impact = () => {
  const chartRefs = {
    co2: useRef(null),
    waste: useRef(null),
    biodiversity: useRef(null),
    water: useRef(null)
  };

  useEffect(() => {
    // Simulate chart.js functionality with CSS animations
    const animateCharts = () => {
      Object.values(chartRefs).forEach(ref => {
        if (ref.current) {
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'translateY(0)';
        }
      });
    };

    const timer = setTimeout(animateCharts, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="impact-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1708255562409-eb269c66c9f1')`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Impact Dashboard</h1>
          <p className="hero-subtitle">
            Measuring our environmental impact and community growth
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-4">Environmental Impact</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">🌍</div>
              <div className="metric-value">{mockData.impactMetrics.co2Sequestered}kg</div>
              <div className="metric-label">CO₂ Sequestered</div>
              <div className="metric-description">
                Carbon dioxide removed from the atmosphere through plant growth
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon">♻️</div>
              <div className="metric-value">{mockData.impactMetrics.wasteReduced}kg</div>
              <div className="metric-label">Waste Diverted</div>
              <div className="metric-description">
                Organic waste converted to compost instead of landfill
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon">🦋</div>
              <div className="metric-value">{mockData.impactMetrics.biodiversityIndex}%</div>
              <div className="metric-label">Biodiversity Index</div>
              <div className="metric-description">
                Measure of species diversity in our garden ecosystem
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon">💧</div>
              <div className="metric-value">{mockData.impactMetrics.waterSaved}L</div>
              <div className="metric-label">Water Conserved</div>
              <div className="metric-description">
                Water saved through rainwater harvesting and efficient irrigation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4">Progress Over Time</h2>
          <div className="charts-grid">
            
            {/* CO₂ Sequestration Bar Chart */}
            <div className="chart-card">
              <h3>CO₂ Sequestration</h3>
              <div ref={chartRefs.co2} className="chart-container">
                <div className="bar-chart">
                  <div className="bar" style={{ height: '20%' }}>
                    <span className="bar-label">Jan</span>
                  </div>
                  <div className="bar" style={{ height: '32%' }}>
                    <span className="bar-label">Feb</span>
                  </div>
                  <div className="bar" style={{ height: '48%' }}>
                    <span className="bar-label">Mar</span>
                  </div>
                  <div className="bar" style={{ height: '67%' }}>
                    <span className="bar-label">Apr</span>
                  </div>
                  <div className="bar" style={{ height: '79%' }}>
                    <span className="bar-label">May</span>
                  </div>
                  <div className="bar" style={{ height: '94%' }}>
                    <span className="bar-label">Jun</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Waste Reduction Line Chart */}
            <div className="chart-card">
              <h3>Waste Reduction</h3>
              <div ref={chartRefs.waste} className="chart-container">
                <div className="line-chart">
                  <div className="line-point" style={{ left: '10%', bottom: '22%' }}></div>
                  <div className="line-point" style={{ left: '30%', bottom: '37%' }}></div>
                  <div className="line-point" style={{ left: '50%', bottom: '49%' }}></div>
                  <div className="line-point" style={{ left: '70%', bottom: '68%' }}></div>
                  <div className="line-point" style={{ left: '90%', bottom: '82%' }}></div>
                  <svg className="line-svg">
                    <polyline points="10,78 30,63 50,51 70,32 90,18" stroke="#228B22" strokeWidth="3" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Biodiversity Pie Chart */}
            <div className="chart-card">
              <h3>Biodiversity Growth</h3>
              <div ref={chartRefs.biodiversity} className="chart-container">
                <div className="pie-chart">
                  <div className="pie-slice" style={{ '--percentage': '40%', '--color': '#228B22' }}>
                    <span className="pie-label">Native Plants</span>
                  </div>
                  <div className="pie-slice" style={{ '--percentage': '25%', '--color': '#32CD32' }}>
                    <span className="pie-label">Vegetables</span>
                  </div>
                  <div className="pie-slice" style={{ '--percentage': '18%', '--color': '#90EE90' }}>
                    <span className="pie-label">Herbs</span>
                  </div>
                  <div className="pie-slice" style={{ '--percentage': '17%', '--color': '#98FB98' }}>
                    <span className="pie-label">Fruits</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Water Conservation Gauge */}
            <div className="chart-card">
              <h3>Water Conservation</h3>
              <div ref={chartRefs.water} className="chart-container">
                <div className="gauge-chart">
                  <div className="gauge-fill" style={{ width: '87%' }}></div>
                  <div className="gauge-label">87% of target met by rainwater</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-4">Community Impact</h2>
          <div className="community-metrics">
            <div className="community-stat">
              <div className="stat-circle">
                <div className="stat-number">{mockData.impactMetrics.studentsEngaged}</div>
                <div className="stat-label">Students Engaged</div>
              </div>
            </div>
            <div className="community-stat">
              <div className="stat-circle">
                <div className="stat-number">{mockData.impactMetrics.communityEvents}</div>
                <div className="stat-label">Community Events</div>
              </div>
            </div>
            <div className="community-stat">
              <div className="stat-circle">
                <div className="stat-number">89</div>
                <div className="stat-label">Plant Species</div>
              </div>
            </div>
            <div className="community-stat">
              <div className="stat-circle">
                <div className="stat-number">450</div>
                <div className="stat-label">Kg Compost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-4">Future Goals</h2>
          <div className="goals-grid">
            <div className="goal-card">
              <div className="goal-icon">🎯</div>
              <h3>2025 Goals</h3>
              <ul>
                <li>Engage 200+ students</li>
                <li>Sequester 2,000kg CO₂</li>
                <li>Establish 3 new garden sections</li>
                <li>Host 30+ community events</li>
              </ul>
            </div>
            <div className="goal-card">
              <div className="goal-icon">🚀</div>
              <h3>2030 Vision</h3>
              <ul>
                <li>1,000+ students engaged</li>
                <li>10,000kg CO₂ sequestered</li>
                <li>Campus-wide sustainability model</li>
                <li>Regional network of gardens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
