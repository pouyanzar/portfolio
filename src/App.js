import React from 'react';
import Menu from './Menu';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Footer from './Footer';
import Skills from './Skills';
import BackToTop from 'react-back-to-top-button'

function App() {
  
  return (
    <div className="App">
      <Menu />
      <Aboutme/>
      <BackToTop showAt={100} speed={1500}  easing="easeInOutQuint" ><img src="/pic/top.jpg" className="top"/></BackToTop>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
