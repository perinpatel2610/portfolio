import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';

const Projects = () => {
  const projects = [
    {
      title: 'AI Cybersecurity Threat Analyzer',
      subtitle: 'GenAI-Powered Log Analysis Platform',
      tech: ['React', 'Vite', 'Node.js', 'Express.js', 'Amazon Bedrock', 'Claude', 'Titan Embeddings', 'RAG', 'Docker'],
      points: [
        'Built a full-stack GenAI cybersecurity platform to analyze security logs and classify threat severity.',
        'Developed REST APIs for log analysis, sample log retrieval, and AI-powered security assistant chat.',
        'Implemented contextual remediation recommendations and Docker Compose-based local deployment.'
      ],
      githubUrl: 'https://github.com/perinpatel2610/AI-Cybersecurity-Threat-Analyzer'
    },
    {
      title: 'WoundVision',
      subtitle: 'AI-Based Wound Assessment Web App',
      tech: ['Python', 'Flask', 'OpenCV', 'XGBoost', 'SHAP', 'PyTest'],
      points: [
        'Built an AI-powered wound assessment web application using Flask, OpenCV, and deep learning models.',
        'Used XGBoost and SHAP to predict wound healing time and provide explainable AI insights.',
        'Optimized image preprocessing pipelines with OpenCV, improving inference speed by 40%.'
      ],
      githubUrl: 'https://github.com/perinpatel2610/WoundVision'
    },
    {
      title: 'EduEase',
      subtitle: 'Education Management Android App',
      tech: ['Java', 'Python', 'Firebase', 'ML', 'Espresso', 'JUnit'],
      points: [
        'Designed Android app with secure role-based login and Firebase Auth/Firestore/Cloud Functions.',
        'Integrated Python ML modules for student performance prediction, improving attendance analytics accuracy by 18%.'
      ],
      githubUrl: 'https://github.com/perinpatel2610/EduEase'
    },
    {
      title: 'EcommProject',
      subtitle: 'Angular E-Commerce Single Page Application',
      tech: ['Angular', 'TypeScript', 'Bootstrap', 'Jasmine', 'Karma'],
      points: [
        'Built full-featured single-page e-commerce app with product listing, cart, checkout, and Auth Guard.',
        'Structured application architecture using Angular services for centralized state management.',
        'Developed and executed unit and integration tests using Jasmine and Karma.'
      ],
      githubUrl: 'https://github.com/perinpatel2610/ecomm-project'
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Key Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{project.title}</h3>
              <h4 style={{ fontSize: '1rem', color: 'var(--accent-color)', fontWeight: '500', marginBottom: '1rem' }}>{project.subtitle}</h4>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--surface-border)' }}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Github size={16} /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
