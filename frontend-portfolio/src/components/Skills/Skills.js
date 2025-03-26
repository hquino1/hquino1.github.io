import './Skills.modules.css';
import langLogo from '../../assets/langLogo.svg';
import langLogoW from '../../assets/langLogoW.svg';
import coreLogo from '../../assets/coreLogo.svg';
import coreLogoW from '../../assets/coreLogoW.svg';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import { useState, useEffect } from 'react';
import RatingCard from '../RatingCard/RatingCard';

const Skills = () => {

    const swTags = ["Javascript", "React", "Node.js", "Next.js", "Git"];

    const languages = [
        {name: 'Python', percentage: '85'},
        {name: 'Javascript', percentage: '80'},
        {name: 'Typescript', percentage: '85'},
        {name: 'SQL', percentage: '70'},
        {name: 'C', percentage: '90'},
    ]

    const skillsSections = [
        { id: 'Languages', label: 'Languages', icon: langLogo, iconWhite: langLogoW},
        { id: 'Core Skills', label: 'Core Skills', icon: coreLogo, iconWhite: coreLogoW}
    ];

    const [activeSection, setActiveSection] = useState('Languages');
    return (
        <section className='skills-section'> 
            <LeftNavbar sections={skillsSections} activeSection={activeSection}> </LeftNavbar>
            <article className='skills-section-container'> 
                <section className='skills-intro-container'> 
                    <ul className='languages-container'> 
                        {languages.map((card, index) => (
                            <li key={index}> <RatingCard name={card.name} percentage={card.percentage}> </RatingCard> </li>
                        
                        ))}
                    </ul>
                </section>

                <section className='skills-intro-container'> 
                    <h1 style={{fontSize: 35, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Poppins', marginBottom: 20}}> Core Skills </h1>
                    <ul className='coreSkills-ul'> 
                        <li> 
                            <div className='coreSkills-container'> 
                                <h1 className='projectCard-header'> Software Development </h1>
                                <div className='tag-container'>
                                    { swTags.map((name, index) => (
                                        <div className='skillsCard-span-div' index={index}> <h1 className='skills-span-div-title'> {name}</h1></div>
                
                                    ))}
                                </div>
                            </div>
                            <div className='coreSkills-container'> </div>
                            <div className='coreSkills-container'> </div>
                        </li> 
                    </ul>
                </section>
            </article>

        </section>
    );
}

export default Skills;
