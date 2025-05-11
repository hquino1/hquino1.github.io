function Skills() {

  const aiTags = ["Deep Learning", "LLMs", "CNNs", "Classifiers"]
  const swTags = ["Waterfall", "Agile", "React", "Node.js", "Express.js", ".NET", "Docker"]
  const csTags = ["Ransomware", "Web-Vulnerabilites", "Buffer Overflows", "Logging", "Input Validation"]
  const rcTags = ["Data Structures & Algorithms", "Fundamental of Software Engineering", "Databases", "Programming Languages", "Computer Vision", "Secure Programming", "Artificial Intelligence", "Linear Algebra"]

  return (
    <div className='text-[#111827] dark:text-[#F1F5F9] w-full h-full pr-0 pl-5 pt-30 pr-5 sm:p-10 lg:p-30 xl:p-30 overflow-auto'> 
      <div className='flex flex-col md:flex-row items-center justify-center mb-20'> 
        <div className='flex flex-col md:flex-row gap-5'> 

          <div className='dark:bg-[#1E293B] bg-[#E5E7EB] p-5 w-full md:w-[400px] rounded-lg'> 
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



          <div className='dark:bg-[#1E293B] bg-[#E5E7EB] p-5 rounded-lg'> 
            <div className=''>

              <span className='flex'> 
                <h1 className='font-[Montserrat] font-bold'> Python </h1>
                <h1 className='font-bold font-[Montserrat] ml-auto'> 90% </h1>
              </span>
              <div className='bg-[#F9FAFB] dark:bg-[#0F172A] w-full md:w-[200px] h-[10px] rounded-xl mt-2 mb-3'> 
                <div className='h-full w-9/10 bg-black dark:bg-white rounded-lg'> </div>
              </div>

              <span className='flex'> 
                <h1 className='font-[Montserrat] font-bold'> Javascript </h1>
                <h1 className='font-bold font-[Montserrat] ml-auto'> 90% </h1>
              </span>
              <div className='bg-[#F9FAFB] dark:bg-[#0F172A] w-full md:w-[200px] h-[10px] rounded-xl mt-2 mb-3'> 
                <div className='h-full w-9/10 bg-black dark:bg-white rounded-lg'> </div>
              </div>

              <span className='flex'> 
                <h1 className='font-[Montserrat] font-bold'> C </h1>
                <h1 className='font-bold font-[Montserrat] ml-auto'> 80% </h1>
              </span>
              <div className='bg-[#F9FAFB] dark:bg-[#0F172A] w-full md:w-[200px] h-[10px] rounded-xl mt-2 mb-3'> 
                <div className='h-full w-8/10 bg-black dark:bg-white rounded-lg'> </div>
              </div>

              <span className='flex'> 
                <h1 className='font-[Montserrat] font-bold'> Java </h1>
                <h1 className='font-bold font-[Montserrat] ml-auto'> 70% </h1>
              </span>
              <div className='bg-[#F9FAFB] dark:bg-[#0F172A] w-full md:w-[200px] h-[10px] rounded-xl mt-2 mb-3'> 
                <div className='h-full w-7/10 bg-black dark:bg-white rounded-lg'> </div>
              </div>

              <span className='flex'> 
                <h1 className='font-[Montserrat] font-bold'> Typescript </h1>
                <h1 className='font-bold font-[Montserrat] ml-auto'> 70% </h1>
              </span>
              <div className='bg-[#F9FAFB] dark:bg-[#0F172A] w-full md:w-[200px] h-[10px] rounded-xl mt-2'> 
                <div className='h-full w-7/10 bg-black dark:bg-white rounded-lg'> </div>
              </div>


            </div>

          </div>
        </div> 

      </div>
      <hr className="border-t border-gray-300 dark:border-gray-700 mx-7 mb-20" />
      <h1 class="text-2xl mb-10 font-[Montserrat] font-bold"> Related Coursework </h1>
      <div className='flex items-center justify-center rounded-lg mb-20'>
        <div className='dark:bg-[#1E293B] bg-[#E5E7EB] flex flex-wrap gap-2 p-5 w-[500px] rounded-lg'> 
          {rcTags.map((name, index) => (
                  <div index={index} className='bg-[#F9FAFB] dark:bg-[#0F172A] h-[20px] w-auto rounded-lg flex text-xs justify-center p-3 items-center'>{name}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
