import './ProjectCard.modules.css';
import { SiReact } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaG } from 'react-icons/fa6';

const ProjectCard = ({title, tags, information}) => {
    return (
        <div className="projectCard-container">
            <h1 className='projectCard-header'> {title}</h1>
            <h2 className='projectCard-subheader'>{information}</h2>
            <span className='projectCard-span'> 
                { tags.map((name, index) => (
                    <div className='projectCard-span-div' index={index}> <h1 className='projectCard-span-div-title'> {name}</h1></div>
                
                ))}
            </span>
            <span className='span-git'> <FaGithub color='white'> </FaGithub> Github</span>
        </div>
    );
}

export default ProjectCard;
