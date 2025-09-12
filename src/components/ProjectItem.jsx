
const ProjectItem = ({name, info, tags}) => {
  return (
    <div className='sm:w-full lg:w-8/10 lg:h-[245px] border border-gray-500 dark:bg-[#1E293B] bg-[#E5E7EB] rounded-lg p-5 transition duration-300 ease-in-out hover:scale-101 shadow-lg mx-auto '> 
      <div className='font-[Montserrat] font-bold text-lg mb-2'> {name}</div>
      <div className='font-[Outfit] text-sm lg:text-lg mb-5 text-gray-600 dark:text-gray-400'> {info} </div>
      <div className='flex gap-2 flex-wrap'> 
        {tags.map((tag, index) => (
          <div className='bg-[#F9FAFB] dark:bg-[#0F172A] h-[20px] w-auto rounded-lg flex text-xs justify-center p-3 items-center transition duration-600 ease-in-out' index={index}> {tag} </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectItem;
