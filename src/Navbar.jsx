import './Nav.css';
import { CiLinkedin } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar(){
    const [open, setOpen] = useState(false);
    return(
       <>
        <div className='main'>
            {/* <div className='Navbar'>
                <div>Home</div>
                <div>Case Studies</div>
                <div>Testimonaials</div>
                <div>Recent work</div>
                <div>Get In Toutch</div>
                <div>
                    <CiLinkedin /> <FaBehance /> <FaTwitterSquare />   
                </div>
            </div>  */}

            <div className='Navbar'>

    <div className='menu_icon' onClick={() => setOpen(!open)}>
        <FaBars />
    </div>

    <div className={`nav_items ${open ? "active" : ""}`}>
        <div>Home</div>
        <div>Case Studies</div>
        <div>Testimonaials</div>
        <div>Recent work</div>
        <div>Get In Toutch</div>
        <div>
            <CiLinkedin /> <FaBehance /> <FaTwitterSquare />   
        </div>
    </div>

</div>
            
            <div className='about_container'>
                <div className='about'>
                    <h1 className='h1'>Vishal Patel</h1>
                    <p className='p'>
                        My name is Vishal Patel. I am from India. I am a student who is passionate about learning programming and web development. I have knowledge of languages like C, C++ and JavaScript. I enjoy solving coding problems and improving my logical thinking skills. My goal is to become a skilled software developer in the future.
                    </p>
                    <div className='button'>
                        <span>Let's get Started...  </span>
                    </div>
                </div>
                <div>
                    <img className='img' src="vishal.png" alt="vishal patel" />
                </div>
            </div>
            <div className='skill'><p>Worked with</p></div>
            <div className='skill_container'>
                <div><span><FaHtml5 size={30}/></span></div>
                <div><span><IoLogoCss3 size={30}/></span></div>
                <div><span><IoLogoJavascript size={30}/></span></div>
                <div><span><FaPhp size={50}/></span></div>
                <div><span><SiMysql size={50} /></span></div>
                <div><span><FaLaravel size={30}/></span></div>
            </div>
        </div>

       </>
    ) ;
    
}