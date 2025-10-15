import React from "react";
import WhyPhantas from "../../components/Landing/WhyPhantas";
import PlansSection from "../../components/Landing/PlanSection";
import Hero from "../../components/Landing/Hero";
import AboutSection from "../../components/Landing/AboutSection";

const Landing = () => {
  return (
    <div className="landing">
      <section id="inicio">
        <Hero />
      </section>

      <section id="sobre">
        <AboutSection />
      </section>

      <section id="por-que">
        <WhyPhantas />
      </section>

      <section id="planes">
        <PlansSection />
      </section>
    </div>
  );
};

export default Landing;
