import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ paddingBottom: '8rem' }}>
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Let's Connect</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          I'm currently looking for new opportunities. Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <a href="mailto:perinpatel.ict18@gmail.com" aria-label="Email Perin" style={{ color: 'var(--text-secondary)', transition: 'transform 0.2s, color 0.2s' }}>
            <div className="contact-icon-wrapper" style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={32} />
            </div>
          </a>
          
          <a href="tel:+12268996923" aria-label="Call Perin" style={{ color: 'var(--text-secondary)', transition: 'transform 0.2s, color 0.2s' }}>
            <div className="contact-icon-wrapper" style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Phone size={32} />
            </div>
          </a>
          
          <a href="https://linkedin.com/in/perinpate2610" target="_blank" rel="noopener noreferrer" aria-label="Perin's LinkedIn Profile" style={{ color: 'var(--text-secondary)', transition: 'transform 0.2s, color 0.2s' }}>
            <div className="contact-icon-wrapper" style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Linkedin size={32} />
            </div>
          </a>
          
          <a href="https://github.com/perinpatel2610" target="_blank" rel="noopener noreferrer" aria-label="Perin's GitHub Profile" style={{ color: 'var(--text-secondary)', transition: 'transform 0.2s, color 0.2s' }}>
            <div className="contact-icon-wrapper" style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Github size={32} />
            </div>
          </a>
        </div>
        
        <a href="mailto:perinpatel.ict18@gmail.com" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
