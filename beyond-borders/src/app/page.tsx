// import Gallery from "../../components/Gallery/Gallery";
import { Hero } from "../../components/Hero/Hero";
import Destinations from "../../components/Destinations/Destinations";
import Services from "../../components/Services/Services";
import InteractiveMap from "../../components/InteractiveMap/InteractiveMap";
import AboutUs from "../../components/AboutUs/About";
import Contact from "../../components/Contact/Contact";
// import Services from "../../components/Services/Services";
// import Gallery from "@/components/Gallery/Gallery";
// import HowWeWork from "@/components/HowWeWork/HowWeWork";
// import PricingCards from "@/components/PricingCards/PricingCards";

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations/>
      <Services />
      <InteractiveMap />
      <AboutUs />
      <Contact />
      {/* <Gallery /> */}
      
      
      
    </>
  );
}
