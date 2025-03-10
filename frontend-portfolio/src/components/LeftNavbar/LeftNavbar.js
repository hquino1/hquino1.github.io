import './LeftNavbar.modules.css';

const LeftNavbar = ({sections, activeSection}) => {
    return (
        <nav style={{ backgroundColor: '#3A3A3A', width: '20%', height: '91vh', position: 'fixed', left: 5, borderRadius: 10, boxShadow: '6px 0 16px rgba(0, 0, 0, 0.5), -6px 0 16px rgba(0, 0, 0, 0.5), 6px 0 20px rgba(255, 255, 255, 0.2)'}}>
            <ul className='sectionList'>
                {sections.map(section => {
                    const isActive = section.id === activeSection;
                return (
                        <li key={section.id} className='sectionLi'>
                            <img src={isActive ? section.iconWhite : section.icon} style={{height: 28}} alt='loading...' ></img>
                            <p style={{fontSize: 20, color: isActive ? 'white' : '#B0B0B0'}}>{section.label}</p>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default LeftNavbar;