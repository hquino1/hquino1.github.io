import { NavLink } from 'react-router-dom';
import './TopNavbar.modules.css';
import { CiTextAlignJustify } from "react-icons/ci";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { CgTranscript } from "react-icons/cg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const TopNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{ backgroundColor: '#3A3A3A', height: 60, display: 'flex', position: 'sticky', top: 0, zIndex: 100, boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.4), -2px -2px 6px rgba(255, 255, 255, 0.1)', borderBottom: '0.5px solid #7a7a7a'}}>
            <h style={{
                color: 'white',
                fontSize: 23,
                marginTop: 'auto',
                marginBottom: 'auto',
                fontFamily: 'Poppins',
                padding: 10
            }}>
                Hector Quinones
            </h>
            <button className='button' onClick={() => isOpen? setIsOpen(false) : setIsOpen(true)}> <CiTextAlignJustify size={25}> </CiTextAlignJustify> </button>
            {
                isOpen && (
                    <nav className='phone-nav'> 
                        <ul className='phone-ul'> 
                            <li><Link to="/" className='phone-li' style={{fontWeight: 'bold', padding: '20'}}>About</Link></li>
                            <li><Link to="/projects" className='phone-li' style={{fontWeight: 'bold'}}>Projects</Link></li>
                            <li><Link to="/skills" className='phone-li' style={{fontWeight: 'bold'}}>Skills</Link></li> 
                            <li><a href='https://github.com/hquino1' className='phone-li' style={{color: "#89CFF0", fontWeight: 'lighter'}}>Github
                                <FaGithubAlt color='white' size={15}> </FaGithubAlt>
                                </a>
                            </li> 
                            <li><a href='https://linkedin.com/in/hectorquino' className='phone-li' style={{color: "#89CFF0", fontWeight: 'lighter'}}>LinkedIn
                                <FaLinkedin color='white' size={15}> </FaLinkedin>
                                </a>
                            </li>
                            <li><a href='https://github.com/hquino1/portfolio-content/blob/main/Hector_Quinones_Resume.pdf' className='phone-li' style={{color: "#89CFF0", fontWeight: 'lighter', outline: 'none'}}>Resume
                                <MdOutlineContactPage color='white' size={15}> </MdOutlineContactPage>
                                </a>
                            </li>
                        </ul>
                        
                        

                    </nav> 
                )
            }
            <ul className='list-sections'>
                <li>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? 'white' : '#7A7A7A', // Change text color when active
                            fontFamily: 'Poppins',
                            fontWeight: isActive ? 'bold' : 'normal',
                            padding: isActive ? '0 5px' : '0' // Padding for underline when active
                        })}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? 'white' : '#7A7A7A',
                            fontFamily: 'Poppins',
                            fontWeight: isActive ? 'bold' : 'normal',
                            padding: isActive ? '0 5px' : '0'
                        })}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/skills"
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? 'white' : '#7A7A7A',
                            fontFamily: 'Poppins',
                            fontWeight: isActive ? 'bold' : 'normal',
                            padding: isActive ? '0 5px' : '0'
                        })}
                    >
                        Skills
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default TopNavbar;
