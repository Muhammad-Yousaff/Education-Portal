import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2a995a08-e32c-44f7-a07b-f08e2c564bb6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "An error occurred");
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="Message Icon" /></h3>
        <p>
          We are here to help! Please feel free to get in touch with us for any questions, feedback, or support.
          Our team is ready to assist you with any inquiries you may have.
        </p>
        <div className='contact-info'>
          <ul>
            <li>
              <strong>Phone Number:</strong><img src={phone_icon} alt="Phone Icon" /> +1 (123) 456-7890
            </li>
            <li>
              <strong>Email:</strong> <img src={mail_icon} alt="Email Icon" /> contact@edusity.com
            </li>
            <li>
              <strong>Address:</strong><img src={location_icon} alt="Location Icon" /> 123 Learning Lane, Edusity Building, City Center, ABC 123
            </li>
          </ul>
        </div>
      </div>

      <div className='contact-col'>
        <form className="contact-form" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />

          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />

          <label>Write Your Message Here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="Arrow Icon" />
          </button>
        </form>

        {/* Displaying the result */}
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
