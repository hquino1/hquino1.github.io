import ProjectItem from '../components/ProjectItem.jsx'

function Projects() {

  const projectTags = [
        { title: 'Movie Tracklist Database', tags: ['Next.js', 'Firebase', 'Spotify API', 'TMDB API'], info: "Developed a full-stack app for reviewing and scoring movie soundtracks. Designed an algorithm to enhance soundtrack accuracy using Spotify’s API, achieving 87% accuracy for trending movies. Integrated Cloud Firestore to manage user data and display insightful movie infographics."},
        { title: 'Online Messaging App', tags: ['React', 'Express.js', 'MongoDB', 'Node.js'], info: "Developed a real-time communication platform using the MERN stack, enabling seamless interaction between online users. Implemented JWT authentication for a personalized and secure experience. Built an Express.js API to handle messaging, friend management, and real-time data transfer via Socket.IO."},
        { title: 'Social Media Application', tags: ['ASP.NET', 'Next.js', 'DynamoDB', 'AWS'], info: "Designed and developed a full-stack social media app with Next.js for a responsive frontend and ASP.NET for the backend API. Optimized performance with DynamoDB for low-latency data management and leveraged AWS S3 with pre-signed URLs for secure file uploads."},
        { title: 'Weather Application', tags: ['Javascript', 'HTML/CSS', 'OpenWeatherMap API'], info: "Developed a weather app that displays temperature, climate, and atmospheric conditions for cities worldwide. Integrated OpenWeatherMap API for real-time data and implemented dynamic backgrounds that adapt to different weather conditions."},
  ];

  return (
    <div className='text-[#111827] dark:text-[#F1F5F9] w-full h-full pr-0 pl-5 pt-30 pr-5 sm:px-20 md:px-10 lg:px-10 xl:px-20 2xl:px-30 overflow-auto'> 
      <ul className='flex flex-wrap gap-5 md:justify-center'> 
        {projectTags.map((project, index) => (
          <li key={index} className='mb-5'> <ProjectItem name={project.title} info={project.info} tags={project.tags} /> </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
