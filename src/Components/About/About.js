
import './About.css';

import { Fragment, useEffect } from 'react';

import 'aos/dist/aos.css'; 
import Aos from 'aos';

import SecondFace  from './../../Images/Portrait3.jpg';






const About = () => {
      
    useEffect(()=>{
        Aos.init({duration:500});
    },[]);


    return (
     <Fragment>
    
     <div className="description_container" id="about">
            <div className="photo_content" data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="500">
            <img className="photo"src={SecondFace} alt="portrait"></img>
           
            </div>
            <div className="text_content"data-aos="fade-down"
             data-aos-easing="linear"
              data-aos-duration="500">
                <h2>About me</h2>
                <p className="parrafo">I am Cristian! Frontend Developer Junior, Passionate about new technologies and web development and interactive design, React is my best ally to create new projects.

                I have always been passionate about design in all its aspects, and discovering design adapted to web technology is quite rewarding. In the projects that I develop I try to be dynamic, responsive, intuitive and fast.
                </p>
            </div> 
    </div>
     </Fragment> 
     );
}
 
export default About;