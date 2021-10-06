
import Project1  from './../../Images/Pixelk.jpg';

import Project3  from './../../Images/Seguros.jpg';
import Project4  from './../../Images/Ejemplo.jpg';
import Project5  from './../../Images/Redux.jpg';

import  './Carousel.css';
import { Fragment, useEffect } from 'react';
import 'aos/dist/aos.css'; 
import Aos from 'aos';









const CarouselProjects = () => {

  useEffect(()=>{
    Aos.init({duration:500});
},[]);
    
  return (
  <Fragment>
    <div className="project_container"data-aos="fade-up" id="projects">
      <h1 className="title_projects">PROJECTS</h1>


      <div className="container_content">

      <div className="container_project">
        <div className="container_image_project">
          <h3>Crud de Productos</h3>
          <img className="projects_image" alt="project" src ={Project5}/>
         </div>
          <div className="hover_container">
            <h2>ReduxCrud</h2>
            <div className="details">
                
                <p>Proyect with React, Redux, React-Router, REST API, and Axios.Proyect with React, Redux, React-Router, REST API, and AxiosProyect with React, Redux, React-Router, REST API, and Axios</p>
                <div className="icons">
                
                <a className="icon" href="https://github.com/cris-perez93/ProductsCrud" target="_blank" rel="noreferrer" ><i className="fab fa-github" aria-hidden="true"></i></a>
                <a className="icon" href="https://product-crud-project.herokuapp.com/" target="_blank" rel="noreferrer"><p>Demo</p></a>
              </div>
           </div>
                
              
              
              
              
          </div>
        </div>


     


         <div className="container_project">
           <div className="container_image_project">
           <h3>Films Layout</h3>
            <img className="projects_image" alt="project" src ={Project1}/>
           </div>
           <div className="hover_container">
              <h2>ApiFilms</h2>
              <div className="details">
                
                <p>Layout for a movie website, using React and Axios.Layout for a movie website, using React and Axios.Layout for a movie website, using React and Axios.</p>
                <div className="icons">
              
                <a className="icon" href="https://github.com/cris-perez93/movies" target="_blank" rel="noreferrer"><i className="fab fa-github" aria-hidden="true"></i></a>
                <a className="icon" href="https://cris-perez93.github.io/movies/" target="_blank" rel="noreferrer"><p>Demo</p></a>
              </div>
              
              </div>

              
              
              
            </div>
          </div>
           

          
          

         
          <div className="container_project">
          
            <div className="container_image_project">
            <h3>Pro Tasks</h3>
              <img className="projects_image" alt="project" src ={Project3}/>
            </div>

              <div className="hover_container">
              <h2>Proyecto Crud</h2>
              <div className="details">
                    
                    <p>Project with a series of functionalities created with React, Context and React-Router,Project with a series of functionalities created with React, Context and React-Router</p>
                    <div className="icons">
                  
                    <a className="icon" href="https://github.com/cris-perez93/CrudProjects" target="_blank" rel="noreferrer" ><i className="fab fa-github" aria-hidden="true"></i></a>
                    <a className="icon" href="https://crudproject23.herokuapp.com/" target="_blank" rel="noreferrer"><p>Demo</p></a>
                  </div>

                </div>
                 
                  
                  
              
                    
               </div>
                
            </div>
              
          
          <div className="container_project">
            <div className="container_image_project">
            <h3>Money Manager</h3>
              <img className="projects_image" alt="project" src ={Project4}/>
            </div>
            
            <div className="hover_container">
            <h2>Presupuesto</h2>
            <div className="details">
                  
                  <p>Small form to manage a weekly / monthly budget, adding and subtracting expenses.-React.Small form to manage a weekly / monthly budget, adding and subtracting expenses.-React.</p>
                  <div className="icons">
                
                <a className="icon" href="https://github.com/cris-perez93/Presupuesto" target="_blank" rel="noreferrer"><i className="fab fa-github" aria-hidden="true"></i></a>
                <a className="icon" href="https://cris-perez93.github.io/Presupuesto/" target="_blank" rel="noreferrer"><p>Demo</p></a>
                </div>
                  
                </div>
                
                
                
            </div>
          </div>
        </div>
        <div className="footer_container">
          <div className="contact">
            <h2>Contact</h2>
            <div className="contact_icons">
              <a className="social_icon" href="https://www.instagram.com/crispero26/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                  <a className="social_icon" href="https://github.com/cris-perez93"target="_blank" rel="noopener noreferrer"><i className= "fa fa-github"></i></a>
                  <a className="social_icon" href="https://www.linkedin.com/in/cristian-p%C3%A9rez-orozco-9186591b5/"target="_blank" rel="noopener noreferrer"><i className= "fab fa-linkedin-in"></i></a>
                 
             </div>
             <p>cristian.h.perez.o@gmail.com</p>
           </div>
          <p>Desinged & Built by Cristian Perez</p>
        </div>
      </div>

      
      
    </Fragment>

      )
}
 
export default CarouselProjects;