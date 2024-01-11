
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import Program from './Component/Program/Program';
import Title from './Component/Title/Title';
import About from './Component/About/About';
import Campus from './Component/Campus/Campus';
import Testimonials from './Component/Testimonials/Testimonials';
function App() {
  return (
    <>
      <Navbar />
     <Hero/>
     <div className='container'>
     <Title subtitle="Our PROGRAM" title="What We Offer" />
      <Program/>
       <About/>
       <Title subtitle="Gallary" title="Campus Photo" />
       <Campus/>
       <Title subtitle="TESTIMONIALS" title="What Students Says" />
       <Testimonials/>
     </div>
     
    
    </>
  );
}

export default App;
