
import './Contact.css';
import Logo from './../../Images/Logo.jpg'
import {useState} from 'react'




const Contact = () => {

    const [click, setClick ] = useState(false)

    const handleClick =() => setClick(!click);
    
    
    
    return ( 

        <div className="contact_container">
            <div
             
             className="btn_contact"
             type ="submit"
             onClick={handleClick}
             
             >
             <img className="logo_fixed" src={Logo} alt="logo"/>
             <h2 className="contact_title">Contact me!</h2>
             
            
             <div className={click ? "social_media" : "social_desactivate"}>
             
             <a className="social_icon" href="https://www.instagram.com/crispero26/" target="_blank"rel="noopener noreferrer"><i className={click ? "fa fa-instagram" : null}></i></a>
              <a className="social_icon" href="https://github.com/cris-perez93"target="_blank"rel="noopener noreferrer"><i className= {click ? "fa fa-github" : null}></i></a>
            
             
             
             </div>
         </div>
         
        </div>
    )
}
 
export default Contact;

