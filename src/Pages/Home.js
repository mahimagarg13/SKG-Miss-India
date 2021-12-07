import Hero from "./Home/Hero";
import React from "react";
import Aboutus from "./Home/Aboutus";
import Benefits from "./Home/Benefits";
function Home() {
  window.scrollTo(0, 0)
  return (
    <div>
      <Hero />
      <Aboutus />
      <Benefits />
    </div>
  );
}
export default Home;
