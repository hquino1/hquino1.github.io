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
        { title: 'Movie Tracklist Database', tags: ['Next.js', 'Firebase', 'Spotify API', 'TMDB API'], info: "Developed a full-stack app for reviewing and scoring movie soundtracks. Designed an algorithm to enhance soundtrack accuracy using Spotify’s API, achieving 87% accuracy for trending movies. Integrated Cloud Firestore to manage user data and display insightful movie infographics."},
        { title: 'Online Messaging Application', tags: ['React', 'Express.js', 'MongoDB', 'Node.js'], info: "Developed a real-time communication platform using the MERN stack, enabling seamless interaction between online users. Implemented JWT authentication for a personalized and secure experience. Built an Express.js API to handle messaging, friend management, and real-time data transfer via Socket.IO."},
        { title: 'Social Media Application', tags: ['ASP.NET', 'Next.js', 'DynamoDB', 'AWS'], info: "Designed and developed a full-stack social media app with Next.js for a responsive frontend and ASP.NET for the backend API. Optimized performance with DynamoDB for low-latency data management and leveraged AWS S3 with pre-signed URLs for secure file uploads."},
        { title: 'Weather Application', tags: ['Javascript', 'HTML/CSS', 'OpenWeatherMap API'], info: "Developed a weather app that displays temperature, climate, and atmospheric conditions for cities worldwide. Integrated OpenWeatherMap API for real-time data and implemented dynamic backgrounds that adapt to different weather conditions."},
    ];

    const lowLevelTags = [
        { title: 'Fat 32 File Access', tags: ['Low-Level', 'C', 'Linux'], info: "Developed a FAT32 image reader capable of accessing and parsing file system structures. Implemented functionality to navigate directories, read file contents, and extract metadata, enabling efficient interaction with FAT32 disk images."},
        { title: 'Custom Linux Shell', tags: ['Low-Level', 'C', 'Linux'], info: "Developed a custom Linux shell using fork() and exec(), enabling command execution, process management, and basic shell functionalities. Implemented features like input parsing and concurrent process handling for an interactive user experience."},
        { title: 'Custom Memory Allocator', tags: ['Low-Level', 'C', 'Linux'], info: "Developed a custom memory allocator managing dynamic memory allocation with malloc(), free(), and realloc() equivalents. Implemented strategies like free list management and block coalescing to optimize memory usage and reduce fragmentation."},
        { title: 'OS Optimization', tags: ['Low-Level', 'C', 'Linux'], info: "Modified a Round Robin scheduler to implement a Priority Scheduling algorithm, ensuring processes are executed based on priority levels. Integrated dynamic priority adjustments and starvation prevention to optimize CPU scheduling efficiency."},
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
                            <li key={index}> <ProjectCard title={card.title} tags={card.tags} information={card.info}> </ProjectCard> </li>
    
                        ) )}
                    </ul>
                </section>

                <section className='projects-intro-container' id='Low Level'> 
                    <h1 style={{fontSize: 35, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Poppins', marginBottom: 20}}> Low Level </h1>
                    <ul className='projects-ul'> 
                        { lowLevelTags.map((card, index) => (
                            <li key={index}> <ProjectCard title={card.title} tags={card.tags} information={card.info}> </ProjectCard> </li>
    
                        ) )}
                    </ul>
                </section>
            </article> 
        </section>

    );
}

export default Projects;
