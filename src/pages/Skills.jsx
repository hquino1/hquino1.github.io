function Skills() {

  const aiTags = ["Deep Learning", "LLMs", "CNNs", "Classifiers"]
  const swTags = ["Waterfall", "Agile", "React", "Node.js", "Express.js", ".NET", "Docker"]
  const csTags = ["Ransomware", "Web-Vulnerabilites", "Buffer Overflows", "Logging", "Input Validation"]

  return (
    <div className='text-[#111827] dark:text-[#F1F5F9] w-full h-full pr-0 pl-5 pt-30 pr-5 sm:p-20 lg:p-30 xl:p-30 overflow-auto'> 
      <div className=''> 
        <div className='flex gap-5'> 

          <div className='dark:bg-[#1E293B] bg-[#E5E7EB] p-5 w-[400px] rounded-lg'> 
            <div className='mb-3 font-[Montserrat] font-bold'> Software Development </div>
            <div className='flex mb-10 flex-wrap gap-2'> 
              {swTags.map((name, index) => (
                <div index={index} className='bg-[#F9FAFB] dark:bg-[#0F172A] h-[20px] w-auto rounded-lg flex text-xs justify-center p-3 items-center'>{name}</div>
              ))} 
            </div>

            <div className='mb-3 font-[Montserrat] font-bold'> Machine Learning & AI </div>
            <div className='flex mb-10 flex-wrap gap-2'> 
              {aiTags.map((name, index) => (
                <div index={index} className='bg-[#F9FAFB] dark:bg-[#0F172A] h-[20px] w-auto rounded-lg flex text-xs justify-center p-3 items-center'>{name}</div>
              ))} 
            </div> 

            <div className='mb-3 font-[Montserrat] font-bold'> Cybersecurity </div>
            <div className='flex mb-10 flex-wrap gap-2'> 
              {csTags.map((name, index) => (
                <div index={index} className='bg-[#F9FAFB] dark:bg-[#0F172A] h-[20px] w-auto rounded-lg flex text-xs justify-center p-3 items-center'>{name}</div>
              ))} 
            </div>

          </div>



          <div className='bg-blue-200'> 
            <div className=''>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Skills
