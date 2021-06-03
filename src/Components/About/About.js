
import './About.css';

import { Fragment, useEffect } from 'react';

import 'aos/dist/aos.css'; 
import Aos from 'aos';

import SecondFace  from './../../Images/Portrait3.jpg';






const About = () => {
      
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);


    return (
     <Fragment>
    
     <div className="description_container" id="about">
            <div className="photo_content" data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="1500">
            <img className="photo"src={SecondFace} alt="portrait"></img>
           
            </div>
            <div className="text_content"data-aos="fade-down"
             data-aos-easing="linear"
              data-aos-duration="1500">
                <h2>About me</h2>
                <p className="parrafo">My interest in development and web design started a few months ago. In a short time I have developed a special taste for web design and web development, interested in continuing to progress in different technologies and especially in interface design."
                </p>
            </div> 
    </div>
     </Fragment> 
     );
}
 
export default About;