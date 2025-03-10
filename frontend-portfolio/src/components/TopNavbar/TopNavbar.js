import { NavLink } from 'react-router-dom';

const TopNavbar = () => {
    return (
        <nav style={{ backgroundColor: '#3A3A3A', height: 60, display: 'flex', position: 'sticky', top: 0, zIndex: 100}}>
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
            <ul style={{
                listStyle: 'none',
                width: 250,
                marginLeft: 'auto',
                display: 'flex',
                gap: 15
            }}>
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
                        to="/Projects"
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
                        to="/Skills"
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
