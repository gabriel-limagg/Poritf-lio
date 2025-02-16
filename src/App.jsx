
import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Inicio from './Components/Inicio';




function App() {
  return (
    <div className="fixed bg-gray-100 h-screen w-screen">
      
      <Inicio/>
      
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
