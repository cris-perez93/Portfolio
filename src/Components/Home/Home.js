import { Fragment } from 'react';
import { Link } from "react-scroll";
import './Home.css';

const Home = () => {
    return (
     <Fragment>
         
        <div className="about_container" id="main">
        
            <div className="container_portrait">
            
                <div className ="hello_world">
                    <h1 className="hello">Hello world!</h1>
                    <p className="description">My name is Cristian Perez, Frontend developer in progress based in Barcelona/Spain.</p>
                    <div className ="button">
                        <Link 
                        activeClass ="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>
                        <input
                        className ="boton"
                        type ="submit"
                        value ="Want know more?"
                        
                        ></input>
                        </Link>
                        
                    </div>
                    
                </div>
                <div className="container_right"><div orientation ="right" className="right"><p>cristian.h.perez.o@gmail.com</p></div></div>
            </div>
           
           </div>
           
         </Fragment>
      );
}
 
export default Home;