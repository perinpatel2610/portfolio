import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'RK Computer Software Inc',
      date: 'May 2025 – Present',
      location: 'Remote, Canada',
      tech: 'React, Angular, TypeScript, Node.js, Express.js, REST APIs',
      points: [
        'Developed responsive frontend features using React, Angular, TypeScript, JavaScript, HTML5, and CSS3.',
        'Built reusable UI components, forms, navigation flows, and dashboard layouts.',
        'Developed backend services and REST API endpoints using Node.js and Express.js.',
        'Integrated frontend applications with backend APIs, handling request and response flows.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Confidosoft Solutions Pvt. Ltd.',
      date: 'Jan 2022 – Aug 2023',
      location: 'Vadodara, India',
      tech: 'Java, Angular, Node.js, Express.js, PostgreSQL, Docker, Jenkins',
      points: [
        'Led Angular-based client dashboard development, refactoring components for improved maintainability.',
        'Built full-stack application modules using Java, Node.js, Express.js, and Angular.',
        'Implemented RESTful APIs and integrated backend services with frontend components.',
        'Configured Dockerized builds and Jenkins CI/CD pipelines to support automated deployments.'
      ]
    },
    {
      role: 'Python Developer Intern',
      company: 'Infolabz',
      date: 'Jun 2021 – Jul 2021',
      location: 'Ahmedabad, India',
      tech: 'Python, REST APIs, Matplotlib, JSON',
      points: [
        'Automated data ingestion from external APIs with Python scripts and visualized results using Matplotlib.',
        'Developed COVID-19 monitoring backend with REST API integration and robust error handling.'
      ]
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title">Professional Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{exp.role}</h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-color)', fontWeight: '500' }}>{exp.company}</h4>
              </div>
              <div style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', justifyContent: 'flex-end' }}>
                  <Calendar size={16} /> <span>{exp.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                  <MapPin size={16} /> <span>{exp.location}</span>
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong>Technologies:</strong> {exp.tech}
              </span>
            </div>
            
            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
