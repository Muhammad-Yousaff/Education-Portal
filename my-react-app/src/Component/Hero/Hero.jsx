
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'> 
     <div className='hero-text'>
        <h1>We Ensure better education for the better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nulla modi sapiente provident sint similique tempora, vitae velit nam commodi, voluptas quae perspiciatis! Repudiandae, sunt modi obcaecati hic id tempora!</p>
       <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
     </div>

    </div>
  )
}

export default Hero
