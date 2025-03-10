import LeftNavbar from "../LeftNavbar/LeftNavbar";

const About = () => {
    const aboutSections = [
        { id: 'intro', label: 'Introduction'},
        { id: 'edu', label: 'Education'}
    ];

    return (
        
        <section style={{
            backgroundColor: '#2C2C2C',
            minHeight: '100vh',  // Ensures it fills the full viewport height
            width: '100%',       // Full width
            display: 'flex',
            padding: 5,
            boxSizing: 'border-box' // Ensures padding doesn't overflow
        }}>
            <LeftNavbar sections={aboutSections}></LeftNavbar>
            <article style={{marginLeft: '20%', left: 5, position: 'relative', width: '100%', alignItems: 'center'}}>
                <section style={{ width: '100%', height: '65vh', display: 'flex', padding: 20, maxWidth: '100%', overflowX: 'hidden', boxSizing: 'border-box'}}>
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
                            <span>quinonhector1</span>
                        </p>
                    </div>
                </section>

                <section style={{width: '100%', height: '65vh', display: 'flex', flexDirection:'column', color: 'white'}}>
                    <h1 style={{fontSize: 35, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Poppins', marginBottom: 20}}>Education</h1>
                    <div style={{gap: 50, height: '100%', width: '100%', display: 'flex', flexDirection: 'column', marginTop: 0}}>
                       <div style={{height: '30%', width: '100%', borderTop: '1px solid transparent', borderBottom: '1px solid transparent', borderImageSource: 'linear-gradient(to right, transparent, #B0B0B0, transparent)', borderImageSlice: 1}}>
                            <h2 style={{gap: 500, display: 'flex', fontFamily: 'Poppins', color: 'white', margin: 30, marginBottom: 0}}>
                                <span style={{color: '#89CFF0'}}>University of Texas at Arlington</span>
                                <span style={{fontWeight: 'lighter'}}>Arlington, TX</span>
                            </h2>

                            <h2 style={{gap: 500, display: 'flex', color: '#B0B0B0', fontStyle: 'italic', marginLeft: 30, marginTop: -30, fontSize: 18}}>
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