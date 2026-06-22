import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      category: 'Languages',
      skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Angular', 'Vite', 'Bootstrap', 'Tailwind CSS', 'Responsive Design', 'UI Components', 'State Management']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'API Integration', 'Authentication', 'Microservices']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase Firestore']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Firebase', 'Docker', 'Jenkins', 'GitHub Actions', 'Amazon Bedrock']
    },
    {
      category: 'Data & AI',
      skills: ['Pandas', 'NumPy', 'TensorFlow', 'OpenCV', 'XGBoost', 'SHAP', 'Matplotlib', 'Generative AI', 'RAG', 'Claude', 'AI Agents']
    },
    {
      category: 'Testing & Practices',
      skills: ['JUnit', 'PyTest', 'Jest', 'Jasmine', 'Karma', 'Mockito', 'Espresso', 'Agile/Scrum', 'CI/CD']
    },
    {
      category: 'Tools & OS',
      skills: ['Git', 'IntelliJ', 'VS Code', 'Jira', 'Postman', 'Jupyter', 'Linux', 'Windows']
    }
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">Technical Skills</h2>
      <div className="glass-card" style={{ padding: '2rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {skillGroups.map((group, index) => (
          <div 
            key={index} 
            className="skill-row"
            style={{ 
              display: 'flex', 
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center', 
              gap: '1.5rem',
              paddingBottom: index === skillGroups.length - 1 ? '0' : '1.25rem',
              borderBottom: index === skillGroups.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            <h3 style={{ 
              fontSize: '0.85rem', 
              textTransform: 'uppercase', 
              letterSpacing: '1.5px', 
              color: 'var(--accent-color)', 
              fontWeight: '700',
              width: '180px',
              flexShrink: 0,
              margin: '0',
              borderLeft: '3px solid var(--accent-color)',
              paddingLeft: '0.75rem'
            }}>
              {group.category}
            </h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', flex: '1' }}>
              {group.skills.map((skill, i) => (
                <span 
                  key={i} 
                  style={{
                    background: 'rgba(59, 130, 246, 0.08)',
                    color: 'var(--text-primary)',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(59, 130, 246, 0.2)';
                    e.target.style.borderColor = 'var(--accent-color)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 10px rgba(59, 130, 246, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(59, 130, 246, 0.08)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.15)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
