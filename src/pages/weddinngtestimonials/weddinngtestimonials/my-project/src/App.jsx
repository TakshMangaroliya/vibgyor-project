import React from "react";
import { Routes, Route } from "react-router-dom";
// import TestimonialSection from "./Testimonials";
import TestimonialSection from "./testimonials";
import TestimonialDetail from "./TestimonialDetail";

function App() {
  return (

      <Routes>
        <Route path="/" element={<TestimonialSection />} />
        <Route path="/testimonial/:id" element={<TestimonialDetail />} />
      </Routes>

  );
}

export default App;
