import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <Services />
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
