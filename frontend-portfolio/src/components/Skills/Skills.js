import './Skills.modules.css';
import langLogo from '../../assets/langLogo.svg';
import langLogoW from '../../assets/langLogoW.svg';
import coreLogo from '../../assets/coreLogo.svg';
import coreLogoW from '../../assets/coreLogoW.svg';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import { useState, useEffect } from 'react';
import RatingCard from '../RatingCard/RatingCard';

const Skills = () => {

    const swTags = ["Javascript", "React", "Node.js", "Next.js", "Git", "Typescript", "MongoDB", "Frontend", "Backend"];
    const aiTags = ["Convolutional Nueral Networks", "HOG", "SIFT", "Pytorch", "Transfer Learning", "Lightning"];
    const coTags = ["Algorithms", "OOP", "Software Engineering", "Databases", "Programming Languages"];

    const languages = [
        {name: 'Python', percentage: '95'},
        {name: 'Javascript', percentage: '90'},
        {name: 'Typescript', percentage: '85'},
        {name: 'SQL', percentage: '85'},
        {name: 'Java', percentage: '80'},
    ]

    const skillsSections = [
        { id: 'Languages', label: 'Languages', icon: langLogo, iconWhite: langLogoW},
        { id: 'Core Skills', label: 'Core Skills', icon: coreLogo, iconWhite: coreLogoW}
    ];

    const [activeSection, setActiveSection] = useState('Languages');
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
                
                skillsSections.forEach(section => {
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
    }, [skillsSections, activeSection]);

    return (
        <section className='skills-section'> 
            <LeftNavbar sections={skillsSections} activeSection={activeSection}> </LeftNavbar>
            <article className='skills-section-container'> 
                <section className='skills-intro-container' id='Languages'> 
                    <ul className='languages-container'> 
                        {languages.map((card, index) => (
                            <li key={index}> <RatingCard name={card.name} percentage={card.percentage}> </RatingCard> </li>
                        
                        ))}
                    </ul>
                </section>

                <section className='skills-intro-container' id='Core Skills'> 
                    <h1 style={{fontSize: 35, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Poppins', marginBottom: 20}}> Core Skills </h1>
                    <ul className='coreSkills-ul'> 
                        <li className='li-style'> 
                            <div className='coreSkills-container'> 
                                <h1 className='projectCard-header'> Software Development </h1>
                                <div className='tag-container'>
                                    { swTags.map((name, index) => (
                                        <div className='skillsCard-span-div' index={index}> <h1 className='skills-span-div-title'> {name}</h1></div>
                
                                    ))}
                                </div>
                            </div>
                        </li> 
                        <li className='li-style'> 
                            <div className='coreSkills-container'> 
                                <h1 className='projectCard-header'> Computer Vision & AI </h1>
                                <div className='tag-container'>
                                    { aiTags.map((name, index) => (
                                        <div className='skillsCard-span-div' index={index}> <h1 className='skills-span-div-title'> {name}</h1></div>
                
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className='li-style'>
                            <div className='coreSkills-container'> 
                                <h1 className='projectCard-header'> Relevant Courses & Material </h1>
                                <div className='tag-container'>
                                    { coTags.map((name, index) => (
                                        <div className='skillsCard-span-div' index={index}> <h1 className='skills-span-div-title'> {name}</h1></div>
                
                                    ))}
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </article>

        </section>
    );
}

export default Skills;
