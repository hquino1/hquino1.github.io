
const ProjectItem = ({name, info, tags}) => {
  return (
    <div className='w-[435px] h-[245px] dark:bg-[#1E293B] bg-[#E5E7EB] rounded-lg p-5'> 
      <div className='font-[Montserrat] font-bold text-lg mb-2'> {name}</div>
      <div className='font-[Outfit] text-sm mb-5'> {info} </div>
      <div className='flex gap-2 flex-wrap'> 
        {tags.map((tag, index) => (
          <div className='bg-[#F9FAFB] dark:bg-[#0F172A] h-[20px] w-auto rounded-lg flex text-xs justify-center p-3 items-center' index={index}> {tag} </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectItem;
