import './Skills.css'
import Html  from './../../Images/html5.png'
import Css  from './../../Images/logocss.png'
import Js  from './../../Images/logojs.png'
import Reactlogo  from './../../Images/Reactlogo.svg'
import Git  from './../../Images/logogit.png'
import Bootstrap  from './../../Images/bootstrap.png'
import 'aos/dist/aos.css'; 



const Skills = () => {
    return ( 
        <section className="skills_container" id="skills">
       
            <div className="skills" >
            <div className="skills_text" data-aos="fade-right" data-aos-offset="200"
             data-aos-easing="ease-in-sine">  
                    <h2 className="skills_title"> Skills</h2>
                    <p>One of my professional objectives is adapted to the needs to evolve and improve within the company where I develop as a professional with a high interest in new technologies and continuous learning.</p>
            </div>
            </div>
            <div className="logos_container" data-aos="fade-left" data-aos-offset="200"
             data-aos-easing="ease-in-sine">
                <div className="container_bars">
                    <div className="card">
                        <img className="logo" alt="html" src={Html}/>
                        <h2 className="text">Html</h2>
                    </div>
                </div>

                <div className="container_bars">
                    <div className="card">
                        <img className="logo" alt="css" src={Css}/>
                        <h2 className="text">Css</h2>
                    </div>
                </div>

                <div className="container_bars">
                    <div className="card">
                        <img className="logo" alt="javascript" src={Js}/>
                        <h2 className="text">Javascript</h2>
                    </div>
                </div>

                <div className="container_bars">
                    <div className="card">
                        <img className="logo" alt="reactjs" src={Reactlogo}/>
                        <h2 className="text">Reactjs</h2>
                    </div>
                </div>
                <div className="container_bars">
                    <div className="card">
                        <img className="logo" alt="git" src={Git}/>
                        <h2 className="text">Git</h2>
                    </div>
                </div>
                <div className="container_bars">
                    <div className="card">
                        <img className="logo" alt="bootstrap" src={Bootstrap}/>
                        <h2 className="text">Bootstrap</h2>
                    </div>
                </div>
            </div> 
    </section>   
     );
}
 
export default Skills;