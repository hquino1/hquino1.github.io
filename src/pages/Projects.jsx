import ProjectItem from '../components/ProjectItem.jsx'
import photo1 from '../assets/IMG_3169.png'
import photo2 from '../assets/IMG_3171.png'
import photo3 from '../assets/IMG_3173.png'
import photo4 from '../assets/IMG_3172.png'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from 'react';

function Projects() {

  const screenshots = [photo1, photo2, photo3, photo4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images to prevent stutter on first navigation
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = screenshots.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      Promise.all(imagePromises)
        .then(() => setImagesLoaded(true))
        .catch((error) => console.warn('Some images failed to preload:', error));
    };

    preloadImages();
  }, [screenshots]);
  const projectTags = [
        { title: 'Movie Tracklist Database', tags: ['Next.js', 'Firebase', 'Spotify API', 'TMDB API'], info: "Developed a full-stack app for reviewing and scoring movie soundtracks. Designed an algorithm to enhance soundtrack accuracy using Spotify's API, achieving 87% accuracy for trending movies. Integrated Cloud Firestore to manage user data and display insightful movie infographics."},
        { title: 'Online Messaging App', tags: ['React', 'Express.js', 'MongoDB', 'Node.js'], info: "Developed a real-time communication platform using the MERN stack, enabling seamless interaction between online users. Implemented JWT authentication for a personalized and secure experience. Built an Express.js API to handle messaging, friend management, and real-time data transfer via Socket.IO."},
        { title: 'Social Media Application', tags: ['ASP.NET', 'Next.js', 'DynamoDB', 'AWS'], info: "Designed and developed a full-stack social media app with Next.js for a responsive frontend and ASP.NET for the backend API. Optimized performance with DynamoDB for low-latency data management and leveraged AWS S3 with pre-signed URLs for secure file uploads."},
        { title: 'Weather Application', tags: ['Javascript', 'HTML/CSS', 'OpenWeatherMap API'], info: "Developed a weather app that displays temperature, climate, and atmospheric conditions for cities worldwide. Integrated OpenWeatherMap API for real-time data and implemented dynamic backgrounds that adapt to different weather conditions."},
        { title: 'Fat 32 File Access', tags: ['Low-Level', 'C', 'Linux'], info: "Developed a FAT32 image reader capable of accessing and parsing file system structures. Implemented functionality to navigate directories, read file contents, and extract metadata, enabling efficient interaction with FAT32 disk images."},
        { title: 'Custom Linux Shell', tags: ['Low-Level', 'C', 'Linux'], info: "Developed a custom Linux shell using fork() and exec(), enabling command execution, process management, and basic shell functionalities. Implemented features like input parsing and concurrent process handling for an interactive user experience."},
        { title: 'Custom Memory Allocator', tags: ['Low-Level', 'C', 'Linux'], info: "Developed a custom memory allocator managing dynamic memory allocation with malloc(), free(), and realloc() equivalents. Implemented strategies like free list management and block coalescing to optimize memory usage and reduce fragmentation."},
        { title: 'OS Optimization', tags: ['Low-Level', 'C', 'Linux'], info: "Modified a Round Robin scheduler to implement a Priority Scheduling algorithm, ensuring processes are executed based on priority levels. Integrated dynamic priority adjustments and starvation prevention to optimize CPU scheduling efficiency."},
  ];

  const handleNavigation = (direction) => {
    if (isAnimating || !imagesLoaded) return;
    
    setIsAnimating(true);
    
    if (direction === 'next' && currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 250);
  };

  return (
    <div className='text-[#111827] dark:text-[#F1F5F9] w-full h-full pr-0 pl-5 pt-30 pr-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 2xl:px-30 overflow-auto transition'> 
      {/* What I'm working on section*/}
      <h1 class="text-2xl mb-10 font-[Montserrat] font-bold"> Current Project </h1>
      <div className='flex flex-col overflow-hidden lg:flex-row justify-center'>
        <div className='h-auto w-auto lg:w-[400px] lg:ml-auto'>
          <div class="text-xl mb-5 font-[Montserrat] font-bold"> Description </div>
          <div className='font-[Outfit] text-xl mb-10 text-gray-600 dark:text-gray-400 justify-center text-justify'>
            Snap2Study is the ultimate AI studying generation tool, that will guide students to educational success. It leverages
            the power of AI to create insightful flashcards & exam questions from study sheets. Students will be able to learn 
            material from their course in an effective way used my millions of scholars around the world, with a simple click
            on their phone!
          </div>
          <div class="text-xl mb-5 font-[Montserrat] font-bold"> Tech Stack </div>
          <div className='font-[Outfit] text-xl mb-10 text-gray-600 dark:text-gray-400 justify-center text-justify'>
            <ul>
              <li>Frontend: React Native w/ Expo</li>
              <li>Backend: FastAPI</li>
              <li>Database/Auth: Supabase</li>
            </ul>
          </div>

        </div>
        {/* Snap2Study Screenshots */}
        <div className='mx-auto w-full md:w-auto flex gap-10 items-center'>
          {/* Left Arrow */}
          <div 
            className={`${currentIndex > 0 && imagesLoaded? '': 'invisible'} border border-gray-500 dark:bg-[#1E293B] bg-[#E5E7EB] h-[40px] w-[40px] rounded-lg items-center justify-center flex transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer active:scale-95 active:bg-opacity-80 ${!imagesLoaded ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={() => handleNavigation('prev')}
          >
            <FaArrowLeft className={`transition-transform duration-200 ${isAnimating ? 'scale-90' : 'scale-100'}`} />
          </div>
          
          {/* Map of Screenshots */}
          <div className='dark:bg-[#1E293B] bg-[#E5E7EB] flex h-auto w-[300px] border border-gray-500 dark:border-gray-100 rounded-2xl p-1 overflow-hidden items-center justify-center relative'>
            {!imagesLoaded && (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 dark:border-gray-300"></div>
              </div>
            )}
            {screenshots.map((screenshot, index) => (
              <img 
                key={index}
                src={screenshot} 
                className={`rounded-2xl transition-all duration-250 ease-in-out max-h-full max-w-full ${
                  index === currentIndex 
                    ? (isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100')
                    : 'opacity-0 scale-95'
                }`}
                alt={`Screenshot ${index + 1}`}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              />
            ))}
          </div>
          
          {/* Right Arrow */}
          <div 
            className={`${currentIndex < 3 && imagesLoaded? '': 'invisible'} border border-gray-500 dark:bg-[#1E293B] bg-[#E5E7EB] h-[40px] w-[40px] rounded-lg items-center justify-center flex transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer active:scale-95 active:bg-opacity-80 ${!imagesLoaded ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={() => handleNavigation('next')}
          >
            <FaArrowRight className={`transition-transform duration-200 ${isAnimating ? 'scale-90' : 'scale-100'}`} />
          </div>
        </div>
      </div>
      
      {/* Seperator */}
      <hr className="border-t border-gray-300 dark:border-gray-700 mx-7 mt-20 mb-20 transition duration-600 ease-in-out" />

      {/* Projects Section*/}
      <h1 class="text-2xl mb-10 font-[Montserrat] font-bold"> Previous Projects </h1>
      <ul className='flex flex-wrap md:flex-col gap-5 md:justify-center lg:items-center'> 
        {projectTags.map((project, index) => (
          <li key={index} className='mb-5'> <ProjectItem name={project.title} info={project.info} tags={project.tags} /> </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
