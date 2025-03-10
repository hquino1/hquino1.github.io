import LeftNavbar from "../LeftNavbar/LeftNavbar";

const About = () => {
    return (
        <section style={{
            backgroundColor: '#2C2C2C',
            minHeight: '100vh',  // Ensures it fills the full viewport height
            width: '100%',       // Full width
            display: 'flex',
            padding: 5,
            boxSizing: 'border-box' // Ensures padding doesn't overflow
        }}>
            <LeftNavbar></LeftNavbar>
            <article style={{marginLeft: '20%', left: 5, backgroundColor: 'green', position: 'relative', width: '100%'}}>
                <h1 style={{ color: 'white' }}>About Me</h1>
                <p style={{ color: 'white' }}>This is the About section.</p>
            </article>
        </section>
    );
};


export default About;