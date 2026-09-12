import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TechStack from "./Components/TechStack";



const App = () => {

  return (
    <div className="relative">
      <div className="sticky top-0 bg-white z-10 backdrop-blur-3xl">
        <Navbar />
      </div>
      <Hero />
      <TechStack />
      <Footer />
      <ToastContainer />
    </div >
  );
};

export default App;
