import React from "react";

import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const work = () => {
  return (
    <div>
      <Hero heading="My Work" message="This is some of my recent work." />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default work;
