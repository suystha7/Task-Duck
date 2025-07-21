import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/Pricing";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Pricing />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
