import LeftNavbar from "../LeftNavbar/LeftNavbar";
import introIcon from "../../assets/square-user-round.svg";
import introWhiteIcon from "../../assets/square-user-roundW.svg";
import eduIcon from '../../assets/university.svg';
import eduWhiteIcon from '../../assets/universityW.svg';

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
        
        <section style={{
            backgroundColor: '#2C2C2C',
            minHeight: '100vh',  // Ensures it fills the full viewport height
            width: '100%',       // Full width
            display: 'flex',
            padding: 5,
            boxSizing: 'border-box' // Ensures padding doesn't overflow
        }}>
            <LeftNavbar sections={aboutSections} activeSection={activeSection}></LeftNavbar>
            <article style={{marginLeft: '20%', left: 5, position: 'relative', width: '100%', alignItems: 'center'}}>
                <section style={{ width: '100%', height: '65vh', display: 'flex', padding: 20, maxWidth: '100%', overflowX: 'hidden', boxSizing: 'border-box'}} id="Introduction">
                    <div style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                        <div style={{ width: '70%', height: '70%', marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', outline: '1px solid #B0B0B0', borderRadius: 10, marginRight: 40}}>

                        </div>
                    </div>
                    <div style={{ width: '40%', height: '100%', alignItems: 'center', color: 'white'}}>
                        <h1 style={{ color: 'white', marginLeft: 30, fontFamily: 'Poppins', fontSize: 35, marginBottom: 5, marginTop: '10vh'}}>
                            <span style={{ color: 'white' }}>I'm</span>
                            <span style={{ color: 'white' }}> </span>
                            <span style={{ color: '#89CFF0' }}>Hector Quinones</span>
                        </h1>
                        <p style={{ color: '#B0B0B0', marginLeft: 30, fontWeight: 'lighter', fontSize: 20, padding: 0}}>
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
                       <div style={{height: '30%', width: '100%', borderTop: '1px solid transparent', borderBottom: '1px solid transparent', borderImageSource: 'linear-gradient(to right, transparent, #B0B0B0, transparent)', borderImageSlice: 1}}>
                            <h2 style={{gap: 500, display: 'flex', fontFamily: 'Poppins', color: 'white', margin: 30, marginBottom: 0}}>
                                <span style={{color: '#89CFF0'}}>University of Texas at Arlington</span>
                                <span style={{fontWeight: 'lighter'}}>Arlington, TX</span>
                            </h2>

                            <h2 style={{gap: 500, display: 'flex', color: '#B0B0B0', fontStyle: 'italic', marginLeft: 30, marginTop: 0, fontSize: 18}}>
                                <span style={{fontWeight: 'lighter'}}>Bachelor of Arts in Computer Science</span>
                                <span style={{fontWeight: 'lighter'}}>Expected Graduation, Spring 2026</span>
                            </h2>
                       </div>

                       <div style={{height: '30%', width: '100%', borderTop: '1px solid transparent', borderBottom: '1px solid transparent', borderImageSource: 'linear-gradient(to right, transparent, #B0B0B0, transparent)', borderImageSlice: 1}}>
                            <h2 style={{gap: 500, display: 'flex', fontFamily: 'Poppins', color: 'white', marginLeft: 30, marginBottom: 0}}>
                                <span style={{color: '#89CFF0'}}>Tarrant County College</span>
                                <span style={{fontWeight: 'lighter'}}>Arlington, TX</span>
                            </h2>

                            <h2 style={{gap: 500, display: 'flex', color: '#B0B0B0', fontStyle: 'italic', marginLeft: 30, marginTop: 0, fontSize: 18}}>
                                <span style={{fontWeight: 'lighter'}}>Associate's in Liberal Arts</span>
                                <span style={{fontWeight: 'lighter'}}>Expected Graduation, Spring 2026</span>
                            </h2>
                       </div>
                         
                    </div>
                </section>
                <section style={{width: '100%', height: '65vh', display: 'flex', backgroundColor: 'yellow'}}></section>
            </article>
        </section>
    );
};


export default About;