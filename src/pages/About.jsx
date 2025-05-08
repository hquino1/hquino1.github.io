import headshot from '../assets/IMG_2912.jpeg'

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
      <hr className="border-t border-gray-300 dark:border-gray-700 mx-7 mb-5" />
    </div>
  )
}

export default About
