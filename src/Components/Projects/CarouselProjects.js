import Project1 from "./../../Images/Pixelk.jpg";
import Project2 from "../../Images/coches.jpg";
import Project3 from "./../../Images/proyectoalumno.png";
import Project4 from "./../../Images/Ejemplo.jpg";
import Project5 from "./../../Images/Redux.jpg";
import Project6 from "./../../Images/resume.jpg";

import "./Carousel.css";
import { Fragment, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const CarouselProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <Fragment>
      <div className="project_container" data-aos="fade-up" id="projects">
        <h1 className="title_projects">PROJECTS</h1>

        <div className="container_content">

        <div className="container_project">
            <div className="container_image_project">
              <h3>Resume maker</h3>
              <img className="projects_image" alt="project" src={Project6} />
            </div>
            <div className="hover_container">
              <h2>Create your resume</h2>
              <div className="details">
                <p>
                Personal project in full development,
                which is based on the creation of high-level resumes. Made mostly with the following technologies, Nexjts, Firebase, Styled Components.
                </p>
                <div className="icons">
                  
                  <a
                    className="icon"
                    href="https://resume-project-zeta.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>Demo</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container_project">
            <div className="container_image_project">
              <h3>Crud Products</h3>
              <img className="projects_image" alt="project" src={Project5} />
            </div>
            <div className="hover_container">
              <h2>ReduxCrud</h2>
              <div className="details">
                <p>
                  Proyect with React, Redux, React-Router, REST API, and Axios.
                  Redux is a predictable state container designed to help you
                  write JavaScript apps that behave consistently across client,
                  server, and native environments and are easy to test.
                </p>
                <div className="icons">
                  <a
                    className="icon"
                    href="https://github.com/cris-perez93/ProductsCrud"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github" aria-hidden="true"></i>
                  </a>
                  <a
                    className="icon"
                    href="https://product-crud-project.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>Demo</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container_project">
            <div className="container_image_project">
              <h3>Car Renting</h3>
              <img className="projects_image" alt="project" src={Project2} />
            </div>
            <div className="hover_container">
              <h2>RentCars</h2>
              <div className="details">
                <p>
                  Widget with search form with several fields. The cars
                  available for rental are shown below. For this project I have
                  used React-Redux for a better centralization of the state.
                </p>
                <div className="icons">
                  <a
                    className="icon"
                    href="https://github.com/cris-perez93/rent-cars"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github" aria-hidden="true"></i>
                  </a>
                  <a
                    className="icon"
                    href="https://cris-perez93.github.io/rent-cars/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>Demo</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container_project">
            <div className="container_image_project">
              <h3>Films Layout</h3>
              <img className="projects_image" alt="project" src={Project1} />
            </div>
            <div className="hover_container">
              <h2>ApiFilms</h2>
              <div className="details">
                <p>
                  Layout for a movie website, using React and and axios for call
                  API movies. Using css flexbox and adding logic to the
                  visualization of the score obtained according to critics.{" "}
                </p>
                <div className="icons">
                  <a
                    className="icon"
                    href="https://github.com/cris-perez93/movies"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github" aria-hidden="true"></i>
                  </a>
                  <a
                    className="icon"
                    href="https://cris-perez93.github.io/movies/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>Demo</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container_project">
            <div className="container_image_project">
              <h3>Alumn Project</h3>
              <img className="projects_image" alt="project" src={Project3} />
            </div>

            <div className="hover_container">
              <h2>Crud Alumn</h2>
              <div className="details">
                <p>
                  Project with a series of functionalities created with React,
                  ContextAPI and React-Router.The React Context API is a way for
                  a React app to effectively produce global variables that can
                  be passed around,it is an alternative to Redux for smaller
                  projects
                </p>
                <div className="icons">
                  <a
                    className="icon"
                    href="https://github.com/cris-perez93/alumn-crud"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github" aria-hidden="true"></i>
                  </a>
                  <a
                    className="icon"
                    href="https://cris-perez93.github.io/alumn-crud/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>Demo</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container_project">
            <div className="container_image_project">
              <h3>Money Manager</h3>
              <img className="projects_image" alt="project" src={Project4} />
            </div>

            <div className="hover_container">
              <h2>Budget</h2>
              <div className="details">
                <p>
                  Small form to manage a weekly / monthly budget, adding and
                  subtracting expenses.React-Hooks
                </p>
                <div className="icons">
                  <a
                    className="icon"
                    href="https://github.com/cris-perez93/Presupuesto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github" aria-hidden="true"></i>
                  </a>
                  <a
                    className="icon"
                    href="https://cris-perez93.github.io/Presupuesto/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>Demo</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_container">
          <div className="contact">
            <h2>Contact</h2>
            <div className="contact_icons">
              <a
                className="social_icon"
                href="https://www.instagram.com/crispero26/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                className="social_icon"
                href="https://github.com/cris-perez93"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                className="social_icon"
                href="https://www.linkedin.com/in/cristian-p%C3%A9rez-orozco-9186591b5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p>cristian.h.perez.o@gmail.com</p>
          </div>
          <p>Desinged & Built by Cristian Perez</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CarouselProjects;
