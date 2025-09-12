import headshot from '../assets/cropped_headshot.jpg'
import logo from '../assets/utaLogo.png'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { ExperienceCard } from '../components/ExperienceCard';
import sentariLogo from '../assets/sentariLogo.jpg';
import adequataLogo from '../assets/adequataLogo.jpg';

function About() {
  const bulletPoints = [
    ["Optimized API performance by refactoring endpoints and data-fetching logic, reducing redundant API calls and drastically reducing page loading times by 4+ seconds.",
      "Developed  NLP features with SpaCy, enabling automated text extraction and classification that was able to efficiently identify keywords.",
      "Resolved critical frontend and backend bugs, improving system stability, which reduced error rates and improved overall user experience."
    ],
    [
      "Helped design backend architecture, by adding logging, auth, and system functionality.",
      "Created reverse proxy servers for API accessibility, and proficient fetching mechanisms."
    ]
  ]

  return (
    <div class="text-[#111827] dark:text-[#F1F5F9] items-center w-full h-full pr-0 pl-5 pt-30 pr-5 sm:p-20 lg:p-30 xl:p-30 overflow-auto transition duration-600 ease-in-out">
      <div class="flex flex-col md:flex-row h-auto mb-20">
        <div className="mr-15 mb-auto h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px] rounded-lg outline-1 p-2 lg:p-5 flex-shrink-0">
          <img src={headshot} className='object-cover h-full w-full rounded-lg'/>
        </div>
        
        <div class="w-full lg:w-1/2 h-full mt-5 mr-10">
          <div class="text-3xl lg:text-4xl mb-10 font-[Montserrat] font-bold"> I'm Hector Quinones </div>
          <div class="font-[Outfit] text-xl mb-10 text-gray-600 dark:text-gray-400"> I'm a student currently exploring my passion for software engineering. I enjoy learning about web development, algorithms, and building projects that solve real-world problems.</div>
          <div> 
            <div class="text-xl mb-5 font-[Montserrat] font-bold"> Additional Info </div>
            <h1 class="text-xl font-[Outfit]  text-gray-600 dark:text-gray-400"> Email: quinonhector1@gmail.com</h1>
            <h1 class="text-xl font-[Outfit] text-gray-600 dark:text-gray-400"> Github: hquino1</h1>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-700 mx-7 mb-20 transition duration-600 ease-in-out" />

      <h1 class="text-2xl mb-10 font-[Montserrat] font-bold"> Education </h1>
      <div class="h-auto flex flex-col md:flex-row mb-20 items-center md:items-stretch"> 
        <div className='h-auto w-100 flex-col'> 
          <img src={logo} className='w-50 h-50 mx-auto mb-5'></img>
          <div className='w-fit h-6 pl-3 pr-3 rounded-xl mx-auto dark:bg-[#1E293B] bg-[#E5E7EB] text-center justify-center items-center text-sm flex transition duration-600 ease-in-out'>3.8 GPA</div>
        </div>

        <div className='h-1/2 w-full md:ml-10 mt-5'>
          <h1 class="text-2xl md:text-2xl mb-1 font-[Montserrat] font-bold">University of Texas at Arlington</h1>
          <h2 className='font-[Montserrat] font-bold mb-5'>B.S. in Computer Science, College of Engineering</h2>
          <div>
            <div className='flex items-center text-xl'>
              <BsFillLightningChargeFill className='mr-3'></BsFillLightningChargeFill>
              Accelerated Program
            </div>
            <h1 className='font-[Outfit] ml-7 mb-5 text-lg text-gray-600 dark:text-gray-400'> On track to graduate in 3 years instead of the traditional 4-year program.</h1>

            <div className='flex items-center text-xl'>
              <IoSchool className='mr-3'></IoSchool>
              Presidential Scholar
            </div>
            <h1 className='font-[Outfit] ml-7 text-lg text-gray-600 dark:text-gray-400'> Holder of a presidential scholarship, given to prestigious students.</h1>
          </div>
        </div>

      </div>

      <hr className="border-t border-gray-300 dark:border-gray-700 mx-7 mb-20 transition duration-600 ease-in-out" />
      
      <h1 class="text-2xl mb-10 font-[Montserrat] font-bold"> Experience </h1>
      <div class="h-auto flex-col md:flex-row mb-20 items-center md:items-stretch">
        <ExperienceCard company={"Sentari AI"} role={"Software Development Engineer"} date={"Jun 2025 - Aug 2025"} image={sentariLogo} points={bulletPoints[0]}/>
        <div className='mb-10'></div>
        <ExperienceCard company={"Adequata"} role={"Full Stack Developer"} date={"Aug 2025 - Present"} image={adequataLogo} points={bulletPoints[1]}/>
      </div>

    </div>
  )
}

export default About
