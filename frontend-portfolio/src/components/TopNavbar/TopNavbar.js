import { NavLink } from 'react-router-dom';
import './TopNavbar.modules.css';
import { CiTextAlignJustify } from "react-icons/ci";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { FaStackExchange } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";
import { AiFillCode } from "react-icons/ai";
import { AiFillFund } from "react-icons/ai";
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
                            <li><Link to="/" className='phone-li' style={{padding: '20', color: '#b0b0b0'}}>
                                <FaStackExchange size={15}> </FaStackExchange>About
                            </Link></li>
                            <li><Link to="/projects" className='phone-li' style={{color: '#b0b0b0'}}>
                                <AiFillCode size={15}> </AiFillCode>Projects
                            </Link></li>
                            <li><Link to="/skills" className='phone-li' style={{color: '#b0b0b0'}}>
                                <AiFillFund size={15}> </AiFillFund>Skills
                            </Link></li> 
                            <li>
                                <a href='https://github.com/hquino1' className='phone-li' style={{color: "#b0b0b0", fontWeight: 'lighter'}}>
                                    <FaGithubAlt color='#b0b0b0' size={15}> </FaGithubAlt>
                                    Github
                                </a>
                            </li> 
                            <li>
                                <a href='https://linkedin.com/in/hectorquino' className='phone-li' style={{color: "#b0b0b0", fontWeight: 'lighter'}}>
                                    <FaLinkedin color='#b0b0b0' size={15}> </FaLinkedin>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/hquino1/portfolio-content/blob/main/Hector_Quinones_Resume.pdf' className='phone-li' style={{color: "#b0b0b0", fontWeight: 'lighter', outline: 'none', boxShadow: 'none'}}>
                                    <RiInformation2Fill color='#b0b0b0' size={15}> </RiInformation2Fill>
                                    Resume
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
