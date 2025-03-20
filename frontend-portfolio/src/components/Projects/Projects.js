import LeftNavbar from '../LeftNavbar/LeftNavbar';
import swLogo from '../../assets/swLogo.svg';
import swLogoW from '../../assets/swLogoW.svg';
import llLogo from '../../assets/llLogo.svg';
import llLogoW from '../../assets/llLogoW.svg';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useState, useEffect } from 'react';
import './Projects.modules.css';

const Projects = () => {

    const projectsSections = [
        { id: 'Software Engineering', label: 'SW Engineering', icon: swLogo, iconWhite: swLogoW},
        { id: 'Low Level', label: 'Low Level', icon: llLogo, iconWhite: llLogoW}
    ];
    
    const projectTags = [
        { title: 'Movie Tracklist Database', tags: ['Next.js', 'Firebase', 'Spotify API', 'TMDB API']},
        { title: 'Online Messaging Application', tags: ['React', 'Express.js', 'MongoDB', 'Node.js']},
        { title: 'Social Media Application', tags: ['ASP.NET', 'Next.js', 'DynamoDB', 'AWS']},
        { title: 'Weather Application', tags: ['Javascript', 'HTML/CSS', 'OpenWeatherMap API']},
    ];

    const lowLevelTags = [
        { title: 'Fat 32 File Access', tags: ['Low-Level', 'C', 'Linux']},
        { title: 'Custom Linux Shell', tags: ['Low-Level', 'C', 'Linux']},
        { title: 'Custom Memory Allocator', tags: ['Low-Level', 'C', 'Linux']},
        { title: 'Weather Application', tags: ['Low-Level', 'C', 'Linux']},
    ];

    const [activeSection, setActiveSection] = useState('Software Engineering');

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
                
                projectsSections.forEach(section => {
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
    }, [projectsSections, activeSection]);

    return (
        <section className="project-container"> 
            <LeftNavbar sections={projectsSections} activeSection={activeSection}></LeftNavbar>
            <article className='projects-article-container' id='Software Engineering'> 
                <section className="projects-intro-container">
                    <ul className='projects-ul'> 
                        { projectTags.map((card, index) => (
                            <li key={index}> <ProjectCard title={card.title} tags={card.tags}> </ProjectCard> </li>
    
                        ) )}
                    </ul>
                </section>

                <section className='projects-intro-container' id='Low Level'> 
                    <h1 style={{fontSize: 35, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Poppins', marginBottom: 20}}> Low Level </h1>
                    <ul className='projects-ul'> 
                        { lowLevelTags.map((card, index) => (
                            <li key={index}> <ProjectCard title={card.title} tags={card.tags}> </ProjectCard> </li>
    
                        ) )}
                    </ul>
                </section>
            </article> 
        </section>

    );
}

export default Projects;
