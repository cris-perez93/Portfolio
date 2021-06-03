
import Project1  from './../../Images/Pixelk.jpg';
import Project2  from './../../Images/Crypto.jpg';
import Project3  from './../../Images/Seguros.jpg';
import Project4  from './../../Images/Ejemplo.jpg';
import  './Carousel.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { Fragment, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Aos from 'aos';



// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);





const CarouselProjects = () => {

  useEffect(()=>{
    Aos.init({duration:2000});
},[]);
    
  return (
  <Fragment>
    <div className="project_container"data-aos="fade-up" id="projects">
      <h1 className="title_projects">PROJECTS</h1>
      <Swiper className="swiper_container"
          
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          
        >
          <SwiperSlide>
            <img className="projects_image" src ={Project1}/>
            <div className="icons">
              <a className="icon" href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
              <a className="icon" href="#"><p>Demo</p></a>
             </div>
             <div className="details"><h2>ApiFilms</h2></div>
          </SwiperSlide>
          <SwiperSlide>
              <img className="projects_image" src ={Project2}/>
              <div className="icons">
                <a className="icon" href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
                <a className="icon" href="#"><p>Demo</p></a>
              </div>
              <div className="details"><h2>Crypto Api</h2></div>
         </SwiperSlide>

          <SwiperSlide>
              <img className="projects_image" src ={Project3}/>
              <div className="icons">
                <a className="icon" href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
                <a className="icon" href="#"><p>Demo</p></a>
              </div>
              <div className="details"><h2>Cotizador de Seguros</h2></div>
          </SwiperSlide>

          <SwiperSlide>
              <img className="projects_image4" src ={Project4}/>
            
              <div className="icons">
              <a className="icon" href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
              <a className="icon" href="#"><p>Demo</p></a>
              </div>
              <div className="details"><h2>Presupuesto</h2></div>
          
          </SwiperSlide>
          
      </Swiper>
    </div>
    </Fragment>

      )
}
 
export default CarouselProjects;