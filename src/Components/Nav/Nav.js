import { Link} from "react-scroll";
import './Nav.css';
import { Fragment, useState } from "react";



const Nav = () => {

    const [click, setClick] = useState(false);

    const handleClick =() => setClick(!click);
  
  return (
      <Fragment>
       
       
       <div className="navbar">
       
       <div className="nav_container">

        <div className="nav_icon" onClick={handleClick}>
               <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
            

           
           
           <ul className= {click ? "menuItems active" : "menuItems"}>
                
                <Link
                    className="enlaces"
                    activeClass ="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    onClick={handleClick}
                    >Home
                </Link>

                <Link
                   className="enlaces" 
                   activeClass ="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    onClick={handleClick}
                    >About
                </Link>
                

                <Link
                    className="enlaces"
                    activeClass ="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    onClick={handleClick}
                    >Skills
                </Link>

                <Link
                   className="enlaces" 
                   activeClass ="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    onClick={handleClick}
                    >Projects
                </Link>

            
             
           </ul>

           </div>
           </div>
    
    
    </Fragment>
      );
}
 
export default Nav;