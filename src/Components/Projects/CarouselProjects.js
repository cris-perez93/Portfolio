
import Project1  from './../../Images/Pixelk.jpg';
import Project2  from './../../Images/Crypto.jpg';
import Project3  from './../../Images/Seguros.jpg';
import Project4  from './../../Images/Ejemplo.jpg';
import  './Carousel.css';
import { Fragment, useEffect } from 'react';
import 'aos/dist/aos.css'; 
import Aos from 'aos';









const CarouselProjects = () => {

  useEffect(()=>{
    Aos.init({duration:2000});
},[]);
    
  return (
  <Fragment>
    <div className="project_container"data-aos="fade-up" id="projects">
      <h1 className="title_projects">PROJECTS</h1>


      <div className="container_content">
         <div className="container_images">
            <img className="projects_image" alt="project" src ={Project1}/>

           <div className="hover_container">

              <div className="details">
                <h2>ApiFilms</h2>
                <a className="icon_mobile" href="https://cris-perez93.github.io/movies/"  target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
              </div>

              <div className="icons">
                <a className="icon" href="https://github.com/cris-perez93/movies" target="_blank" rel="noreferrer"><i className="fab fa-github" aria-hidden="true"></i></a>
                <a className="icon" href="https://cris-perez93.github.io/movies/" target="_blank" rel="noreferrer"><p>Demo</p></a>
              </div>
              
            </div>
          </div>
           

          
          <div className="container_images">
          
              <img className="projects_image" alt="project" src ={Project2}/>

              <div className="hover_container">
              <div className="details">
                  <h2>Crypto Api</h2>
                  <a className="icon_mobile" href="https://cris-perez93.github.io/criptomonedas/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="icons">
                  <a className="icon" href="https://github.com/cris-perez93/criptomonedas" target="_blank" rel="noreferrer"><i className="fab fa-github" aria-hidden="true"></i></a>
                  <a className="icon" href="https://cris-perez93.github.io/criptomonedas/" target="_blank" rel="noreferrer"><p>Demo</p></a>
                </div>
                
              </div>
          </div>

         
          <div className="container_images">
          
              <img className="projects_image" alt="project" src ={Project3}/>

              <div className="hover_container">
              <div className="details">
                    <h2>Proyecto Crud</h2>
                    <a className="icon_mobile" href="https://crudproject23.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
                  </div>
                  <div className="icons">
                    <a className="icon" href="https://github.com/cris-perez93/CrudProjects" target="_blank" rel="noreferrer" ><i className="fab fa-github" aria-hidden="true"></i></a>
                    <a className="icon" href="https://crudproject23.herokuapp.com/" target="_blank" rel="noreferrer"><p>Demo</p></a>
                  </div>
                  
              </div>
            </div>
              
          
          <div className="container_images">
          
              <img className="projects_image" alt="project" src ={Project4}/>
            
            <div className="hover_container">
            <div className="details">
                  <h2>Presupuesto</h2>
                  <a className="icon_mobile" href="https://cris-perez93.github.io/Presupuesto/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="icons">
                <a className="icon" href="https://github.com/cris-perez93/Presupuesto" target="_blank" rel="noreferrer"><i className="fab fa-github" aria-hidden="true"></i></a>
                <a className="icon" href="https://cris-perez93.github.io/Presupuesto/" target="_blank" rel="noreferrer"><p>Demo</p></a>
                </div>
                
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>

      )
}
 
export default CarouselProjects;