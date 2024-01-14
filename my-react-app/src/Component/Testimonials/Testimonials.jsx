import { useState } from 'react';
import "./Testimonials.css"; // ✅ Correct

import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import next_icon from '../../assets/next-icon.png'; 
import back_icon from '../../assets/back-icon.png'; 

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      img: user_1,
      name: "William Jackson",
      location: "Edusity, USA",
      quote: "Studying at Edusity has been an amazing experience..."
    },
    {
      img: user_2,
      name: "Emily Clark",
      location: "Edusity, UK",
      quote: "Edusity has provided me with an excellent platform..."
    },
    {
      img: user_3,
      name: "John Smith",
      location: "Edusity, Canada",
      quote: "The interactive learning environment at Edusity..."
    },
    {
      img: user_4,
      name: "Alice Walker",
      location: "Edusity, Australia",
      quote: "I am truly impressed with the resources and networking opportunities..."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonical">
      <img src={next_icon} alt="Next" className="next-btn" onClick={nextSlide} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={prevSlide} />
      <div className="slider">
        <ul style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <p>{testimonial.quote}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
