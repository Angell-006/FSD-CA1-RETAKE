import React from "react";
import TestimonialCard from "./components/TestimonialCard";

function App(){
  return(
    <div className="card-component">
      <div className="testimonials">Our customer's testimonials</div>
      <div className="customer">
        <TestimonialCard name="Emily Watson" review="This service was amazing!! Highly recommended"></TestimonialCard>
        <TestimonialCard name="James Bond" review="Service was so good loved it!!"></TestimonialCard>
        <TestimonialCard name="Lily purple" review="Very good service will definetly come again"></TestimonialCard>
      </div>
    </div>
  )
};

export default App;