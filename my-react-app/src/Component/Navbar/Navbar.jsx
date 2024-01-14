import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li> 
          <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li>
          <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link>
        </li>
        <li>
          <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link>
        </li>
        <li>
          <Link to='testimonical' smooth={true} offset={-250} duration={500}>Testimonials</Link>
        </li>
        <li>
         
          <Link to='contact' smooth={true} offset={-260} duration={500}>
            <button className="btn">Contact us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
