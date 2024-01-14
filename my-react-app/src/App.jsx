
// import Navbar from './Component/Navbar/Navbar'
// import Hero from './Component/Hero/Hero'
// import Program from './Component/Programs/Program'
// import Title from './Component/Title/Title'
// import About from './Component/About/About'
// import Campous from './Component/Campous/Campous'

// import Contact from './Component/Contact/Contact'
// import { Footer } from './Component/Footer/Footer'
// import Testimonials from './Component/Testimonials/Testimonials'
// const App = () => {
//   return (
//     <div>
//    <Navbar/>
//    <Hero/>    
//    <Title Subtitle='Our PROGRAM' Title='What WE offer'/>
//    <div className="container">
    
//    <Program/>  
//    <Title Subtitle='Gallery' Title='Camus Photo'/>
//    <Campous/>
//    <Title Subtitle='TESTIMONIALS' Title='What Student Says'/>
//    <Testimonials/>
//    <About/>
//    <Contact/>
//    <Footer/>
//    </div>
   
//     </div>
//   )
// } 

// export default App







import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import Program from './Component/Program/Program';
import Title from './Component/Title/Title';
import About from './Component/About/About';
import Campus from './Component/Campus/Campus';
import Testimonials from './Component/Testimonials/Testimonials';
import Contact from './Component/Contact/Contact';
import { Footer } from './Component/Footer/Footer';
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
       <Contact/>
       <Footer/>
     </div>
     
    
    </>
  );
}

export default App;
