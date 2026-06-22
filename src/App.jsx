import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--surface-border)' }}>
        <p>Built with React & Vite by Perin Patel</p>
      </footer>
    </>
  )
}

export default App
