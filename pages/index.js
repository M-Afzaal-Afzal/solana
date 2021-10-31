import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import FAQ from "../components/FAQ";
import Team from "../components/Team"
import Footer from "../components/Footer";

function index() {
  return (
    <>
     <Navbar /> 
     <Hero />
     <Roadmap />
     <FAQ />
     <Team />
     <Footer />
    </>
  )
}

export default index
