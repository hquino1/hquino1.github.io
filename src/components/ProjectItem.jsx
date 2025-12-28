import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ProjectItem = ({name, info, tags, link}) => {
  return (
    <a href={link}>
      <div className='sm:w-full lg:w-8/10 lg:h-[245px] border border-gray-500 dark:bg-[#1E293B] bg-[#E5E7EB] rounded-lg p-5 transition duration-300 ease-in-out hover:scale-101 shadow-lg mx-auto group hover:border-black dark:hover:border-white cursor-pointer'> 
        <div className='font-[Montserrat] font-bold text-lg mb-2'> {name}</div>
        <div className='font-[Outfit] text-sm lg:text-lg mb-5 text-gray-600 dark:text-gray-400'> {info} </div>
        <div className='flex gap-2 flex-wrap'> 
          {tags.map((tag, index) => (
            <div className='bg-[#F9FAFB] dark:bg-[#0F172A] h-[20px] w-auto rounded-lg flex text-xs justify-center p-3 items-center transition duration-600 ease-in-out' index={index}> {tag} </div>
          ))}
        </div>
        <span className="ml-auto flex items-center gap-2 pt-4 sm:pt-0">
          <FaGithub className="ml-auto font-[Outfit] text-md opacity-20 group-hover:opacity-100 transition-opacity duration-300"></FaGithub>
          <span className="font-[Outfit] text-md opacity-20 group-hover:opacity-100 transition-opacity duration-300">View Project</span>
          <FaArrowRight className="font-[Outfit] text-sm opacity-20 group-hover:opacity-100 transition-opacity duration-300"></FaArrowRight>
        </span>
      </div>
    </a>
  )
}

export default ProjectItem;
