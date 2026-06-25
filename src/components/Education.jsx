import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="container">
      <h2 className="section-title">Education & Certifications</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Education Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <GraduationCap color="var(--accent-color)" size={28} />
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>Education</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: '600' }}>Master of Applied Computing</h4>
                <span style={{ color: 'var(--accent-color)', fontWeight: '500' }}>Jan 2024 – May 2025</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Wilfrid Laurier University, Waterloo, ON</p>
              <p style={{ color: 'var(--text-secondary)' }}><strong>GPA:</strong> 3.75 / 4.0</p>
            </div>
            
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: '600' }}>B.E. in Information & Comm. Tech</h4>
                <span style={{ color: 'var(--accent-color)', fontWeight: '500' }}>Jun 2018 – May 2022</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Adani Institute of Infrastructure Engineering, Ahmedabad, India</p>
              <p style={{ color: 'var(--text-secondary)' }}><strong>CGPA:</strong> 8.71 / 10.0</p>
            </div>
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <Award color="var(--accent-color)" size={28} />
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>Certifications</h3>
          </div>
          
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--surface-border)' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Complete Python Bootcamp</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Udemy</p>
            </div>
            
            <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--surface-border)' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>MATLAB Onramp</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>MathWorks</p>
            </div>
            
            <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--surface-border)' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>AWS Generative AI and AI Agents with Amazon Bedrock</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Amazon Web Services</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
