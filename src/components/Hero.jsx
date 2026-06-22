import { Mail, ChevronRight, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="animate-fade-in">
          <p style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '1rem' }}>Hi, my name is</p>
          <h1 style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Perin Patel.
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
            Software Developer with 2.5+ years of experience building full-stack applications using React, Angular, Node.js, and Python. Passionate about creating responsive interfaces, robust APIs, and AI-enabled software solutions.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary">
              Get In Touch <Mail size={18} />
            </a>
            <a href="https://github.com/perinpatel2610" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/perinpate2610" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              LinkedIn <Linkedin size={18} />
            </a>
            <a href="/Perin_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}>
              Resume <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
