import Nav from './Components/Nav/Nav'
import About from './Components/About/About';
import CarouselProjects from './Components/Projects/CarouselProjects';  
import Contact from './Components/Contact/Contact'; 
import { Fragment, useEffect, useState} from 'react';
import Skills from './Components/Skills/Skills'
import Home from './Components/Home/Home';








function App({click}) {

  const [scrollheight, setScrollHeight] = useState(0);

  const handleScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeight(position);

  }
  
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll )
  },[scrollheight])


 

  return (
    <Fragment>
      <div className="container">
      <Nav/>
      
       
       
      <Home
      />
      
    
      <About
     />
      <Skills
      />
     
      <CarouselProjects
      />
      <Contact
      scrollheight={scrollheight}/>
   
      
      </div>
      
    </Fragment>
  );
}

export default App;
