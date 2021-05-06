import React, {useState} from 'react';
import Menu from './Menu';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Footer from './Footer';
import Skills from './Skills';
import BackToTop from 'react-back-to-top-button'
import Modal from './Modal';
function App() {
  const [display, setDisplay] = useState(false);
  const show = () => {
    setDisplay(true);
  }
  const hide = () => {
    setDisplay(false);
  }
 
  return (
    <div className="App">
      <Menu show={show}/>
      <Modal hide={hide} display={display}/>
      <Aboutme/>
      <BackToTop showAt={100} speed={1500}  easing="easeInOutQuint" ><img src="/pic/top.jpg" className="top" alt="top-button"/></BackToTop>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
