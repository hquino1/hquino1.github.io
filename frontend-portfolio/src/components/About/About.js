import LeftNavbar from "../LeftNavbar/LeftNavbar";
import introIcon from "../../assets/square-user-round.svg";
import introWhiteIcon from "../../assets/square-user-roundW.svg";
import eduIcon from '../../assets/university.svg';
import eduWhiteIcon from '../../assets/universityW.svg';
import utaLogo from '../../assets/utaLogo.png';
import { IoIosSpeedometer } from "react-icons/io";
import { FaGoogleScholar } from "react-icons/fa6";
import './About.css';

import { useEffect, useState } from "react";

const About = () => {
    const aboutSections = [
        { id: 'Introduction', label: 'Introduction', icon: introIcon, iconWhite: introWhiteIcon},
        { id: 'Education', label: 'Education', icon: eduIcon, iconWhite: eduWhiteIcon}
    ];

    const [activeSection, setActiveSection] = useState('Introduction');

    useEffect(() => {
        // Add a small debounce to avoid too many updates
        let scrollTimeout;
        
        const handleScroll = () => {
            // Clear the timeout if we're still scrolling
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            // Set a small timeout to run after scrolling stops
            scrollTimeout = setTimeout(() => {
                // Use a point 1/3 down from the top of the viewport for detection
                const scrollPosition = window.scrollY + window.innerHeight / 3;
                
                // Find which section contains this point
                let currentSection = null;
                
                aboutSections.forEach(section => {
                    const element = document.getElementById(section.id);
                    if (!element) return;
                    
                    const rect = element.getBoundingClientRect();
                    const absoluteTop = rect.top + window.scrollY;
                    const absoluteBottom = rect.bottom + window.scrollY;
                    
                    if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
                        currentSection = section.id;
                    }
                });
                
                // Update the active section if we found one
                if (currentSection && currentSection !== activeSection) {
                    setActiveSection(currentSection);
                    console.log("ACTIVE SECTION CHANGED TO: ", currentSection);
                }
            }, 50); // Small delay to let scrolling settle
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Call once at beginning to set initial state
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, [aboutSections, activeSection]);

    return (
        
        <section className="about-container">
            <LeftNavbar sections={aboutSections} activeSection={activeSection}></LeftNavbar>
            <article className="article-container" >
                <section className="intro-container" id="Introduction">
                    <div style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                        <div style={{ width: '70%', height: '70%', marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', outline: '1px solid #B0B0B0', borderRadius: 10, marginRight: 40}}>

                        </div>
                    </div>
                    <div className="intro-box">
                        <h1 style={{ color: 'white', marginLeft: 30, fontFamily: 'Poppins', fontSize: 35, marginBottom: 5, marginTop: '10vh'}}>
                            <span style={{ color: 'white' }}>I'm</span>
                            <span style={{ color: 'white' }}> </span>
                            <span style={{ color: '#89CFF0' }}>Hector Quinones</span>
                        </h1>
                        <p className="intro-sub">
                            I'm a student currently exploring my passion for software engineering. I enjoy learning about web development, algorithms, and building projects that solve real-world problems.
                        </p>
                        <h2 style={{color: '#89CFF0', marginLeft: 30, fontFamily: 'Poppins'}}>Additional Info</h2>
                        <p style={{fontFamily: 'Poppins', marginLeft: 30, color: '#B0B0B0'}}>
                            <span>Email</span>
                            <span style={{padding: 50}}>:</span>
                            <span>quinonhector1@gmail.com</span>
                        </p>
                        <p style={{fontFamily: 'Poppins', marginLeft: 30, color: '#B0B0B0'}}>
                            <span>Github</span>
                            <span style={{padding: 40}}>:</span>
                            <span>hquino1</span>
                        </p>
                    </div>
                </section>

                <section style={{width: '100%', height: '65vh', display: 'flex', flexDirection:'column', color: 'white'}} id="Education">
                    <h1 style={{fontSize: 35, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Poppins', marginBottom: 20}}>Education</h1>
                    <div style={{gap: 50, height: '100%', width: '100%', display: 'flex', flexDirection: 'column', marginTop: 0}}>
                       <div className="education">
                            <div style={{ width: '30%', display: 'flex', justifyContent: 'center', paddingTop: 50, paddingRight: 20}}>
                                <img src={utaLogo} style={{height: 150}}></img>
                            </div>

                            <div>
                                <h1 className="educationHeaders" style={{fontSize: 25, color: '#89CFF0', paddingTop: 30}}>The University of Texas at Arlington</h1>
                                <h2 className="educationHeaders" style={{fontSize: 20, color: '#B0B0B0', paddingTop: 5}}>Bachelor of Arts in Computer Science</h2>
                                <div>
                                    <span className="educationSubInfo">
                                        <IoIosSpeedometer color="#89CFF0" style={{height: 15, marginTop: 20}}></IoIosSpeedometer>
                                        <p style={{marginTop: 20, marginBottom: 0, marginLeft: 0}}>Accelerated Program</p>
                                    </span>
                                    <p style={{margin: 0, paddingLeft: 27, color:'#B0B0B0'}}>On track to graduate in a 3-year span instead of the traditonal 4.</p>
                                </div>

                                <div>
                                    <span className="educationSubInfo">
                                        <FaGoogleScholar color="#89CFF0" style={{height: 15, marginTop: 20}}></FaGoogleScholar>
                                        <p style={{marginTop: 20, marginBottom: 0, marginLeft: 0}}>Presedential Scholar</p>
                                    </span>
                                    <p style={{margin: 0, paddingLeft: 27, color:'#B0B0B0'}}>Have been honored with a prestigous scholarship for outstanding students.</p>
                                </div>
                            </div>
                       </div>
                                                
                    </div>
                </section>
                {/* <section style={{width: '100%', height: '65vh', display: 'flex', backgroundColor: 'yellow'}}></section> */}
            </article>
        </section>
    );
};


export default About;
