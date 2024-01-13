import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Experience from "./Components/Experience/Experience";
import Training from "./Components/Training/Training";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Certifications from "./Components/Certifications/Certifications";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <About/>
      <Experience/>
      <Training/>
      <Certifications/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
