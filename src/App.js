import "./App.css";
import Clients from "./components/Clients/Clients";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Main from "./pages/Main";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/FeaturesCard";
import FeatureData from "./components/Features/FeatureData";
import Nav from "./components/Navbar/Nav";
import Trusted from "./components/Trusted/Trusted";
import Information from "./components/Information/Information";

function App() {
  return (
      <div className="flex flex-col w-full items-center antialiased">
          <div className="max-w-7xl ">
              <div className="md:mb-[200px] ">
                  <Nav />
              </div>
              <div className="md:mb-[200px]">
                  <Home />
              </div>
              <div className="md:mb-[200px]">
                  <Trusted />
              </div>
        
              <Information />
              <Clients />
              <Services />

              <Testimonials />

              <Footer />
          </div>
      </div>
  );
}

export default App;
