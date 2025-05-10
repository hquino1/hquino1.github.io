import headshot from '../assets/IMG_2912.jpeg'
import logo from '../assets/utaLogo.png'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";

function About() {
  return (
    <div class="text-[#111827] dark:text-[#F1F5F9] w-full h-full p-30 overflow-auto">
      <div class="h-auto flex mb-20">
        <div class="mr-auto mb-auto h-110 w-110 rounded-lg outline-1 p-5">
          <img src={headshot} class="w-full h-full object-cover object-bottom rounded-lg"/>
        </div>
        
        <div class="w-1/2 h-full mt-5 mr-10">
          <div class="text-4xl mb-10 font-[Montserrat] font-bold"> I'm Hector Quinones </div>
          <div class="font-[Outfit] text-xl mb-10"> I'm a student currently exploring my passion for software engineering. I enjoy learning about web development, algorithms, and building projects that solve real-world problems.</div>
          <div> 
            <div class="text-xl mb-5 font-[Montserrat] font-bold"> Additional Info </div>
            <h1 class="text-xl"> Email -> quinonhector1@gmail.com</h1>
            <h1 class="text-xl"> Github -> hquino1</h1>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-700 mx-7 mb-20" />

      <h1 class="text-2xl mb-10 font-[Montserrat] font-bold"> Education </h1>
      <div class="h-auto flex mb-20"> 
        <div className='h-auto w-100 flex-col'> 
          <img src={logo} className='w-55 h-60 mx-auto mb-5'></img>
          <div className='w-fit h-6 pl-3 pr-3 rounded-xl mx-auto dark:bg-[#1E293B] bg-[#E5E7EB] text-center justify-center items-center text-sm'>3.7 GPA</div>
        </div>

        <div className='h-1/2 w-full ml-10 mt-5'>
          <h1 class="text-4xl mb-1 font-[Montserrat] font-bold">University of Texas at Arlington</h1>
          <h2 className='font-[Montserrat] font-bold mb-5'>B.S. in Computer Science, College of Engineering</h2>
          <div>
            <div className='flex items-center text-lg'>
              <BsFillLightningChargeFill className='mr-3'></BsFillLightningChargeFill>
              Accelerated Program
            </div>
            <h1 className='font-[Outfit] ml-7 mb-5'> On track to graduate in 3 years instead of the traditional 4-year program.</h1>

            <div className='flex items-center text-lg'>
              <IoSchool className='mr-3'></IoSchool>
              Presidential Scholar
            </div>
            <h1 className='font-[Outfit] ml-7'> Holder of a presidential scholarship, given to prestigious students.</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
