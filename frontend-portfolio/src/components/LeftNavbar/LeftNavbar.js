import './LeftNavbar.modules.css';
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { CgTranscript } from "react-icons/cg";

const LeftNavbar = ({sections, activeSection}) => {
    return (
        <nav className='leftNavbar'>
            <ul className='sectionList'>
                {sections.map(section => {
                    const isActive = section.id === activeSection;
                return (
                        <li key={section.id} className='sectionLi' style={{outline: isActive? '1px solid white' : '0.5px solid #7a7a7a', boxShadow: isActive? '0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)' : 'none', backgroundColor: isActive? '#2c2c2c' : 'inherit'}}>
                            <img src={isActive ? section.iconWhite : section.icon} style={{height: 25}} alt='loading...' ></img>
                            <p style={{fontSize: 20, color: isActive ? 'white' : '#7A7A7A'}}>{section.label}</p>
                        </li>
                    );
                })}
            </ul>
            <footer className='leftFooter'>
                <h2 style={{color: '#B0B0B0', fontFamily: 'Poppins', fontWeight: 'lighter', fontSize: 17}}>Social Links</h2>
                <span style={{display: 'flex', gap: '13px'}}>
                    <a href='https://github.com/hquino1'>
                        <div className='linkCard'>
                            <FaGithubAlt color='white'></FaGithubAlt>
                        </div>
                    </a>

                    <a href='https://linkedin.com/in/hectorquino'>
                        <div className='linkCard'>
                            <FaLinkedin color='white'></FaLinkedin>
                        </div>
                    </a>
                </span>

                <h2 style={{color: '#B0B0B0', fontFamily: 'Poppins', fontWeight: 'lighter', fontSize: 17}}>Resume & Transcript</h2>
                <span style={{display: 'flex', gap: '13px'}}>
                    <a href='https://github.com/hquino1/portfolio-content/blob/main/Hector_Quinones_Resume.pdf'>
                        <div className='linkCard'>
                            <MdOutlineContactPage color='white'></MdOutlineContactPage>
                        </div>
                    </a>
                    <div className='linkCard'>
                        <CgTranscript color='white'></CgTranscript>
                    </div>
                </span>
            </footer>
        </nav>
    );
};

export default LeftNavbar;
