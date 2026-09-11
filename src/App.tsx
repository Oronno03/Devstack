import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TechStack from "./Components/TechStack";



const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
