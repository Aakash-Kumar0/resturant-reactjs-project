import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Content from './components/Contentt/Content'
import WhyChoose from './components/WhyChoose/WhyChoose'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import AOS from "aos";
import "aos/dist/aos.css"
const App = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      dealay: 100,
    });
    AOS.refresh();
  });

  return (
    <div className='overflow-x-hidden'>
      <Navbar HandlePopup= {HandlePopup}/>
      <Banner/>
      <Content/>
      <WhyChoose/>
      <About HandlePopup={HandlePopup}/>
      <Footer/>
      <Popup showPopup = {showPopup} setShowPopup = {setShowPopup} />
    </div>
  )
}

export default App
