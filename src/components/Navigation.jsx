import { useState } from 'react';
import NavigationItem from '../components/NavigationItem.jsx'
import LinkItem from '../components/LinkItem.jsx'
import { IoPerson } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";
import { AiFillRocket } from "react-icons/ai";
import { MdNightlight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

const Navigation = () => {

  const [isDark, setIsDark] = useState(false)
  function toggleDarkMode() {
    if (!isDark){
      document.documentElement.classList.add('dark'); // Adds/removes the class on <html>
      setIsDark(true)
    }
    else{
      document.documentElement.classList.remove('dark'); // Adds/removes the class on <html>
      setIsDark(false)
    }
  }
  return(
    
    <> 
      {/* Desktop navigation */}
      <nav class="dark:bg-[#1E293B] bg-[#E5E7EB] h-full w-72 p-7 font-[Outfit]">
        <NavigationItem name={"About"} Icon={IoPerson} to={"/"}/>
        <NavigationItem name={"Projects"} Icon={AiFillCode} to={"/projects"}/>
        <NavigationItem name={"Skills"} Icon={AiFillRocket} to={"/skills"}/>
        
        <hr className="border-t border-gray-300 dark:border-gray-700 mx-7 mb-5" />
        <h1 className=' mb-5 text-lg text-[#111827] dark:text-[#F1F5F9]'>Social Links</h1>

        <LinkItem name={"Github"} Icon={FaGithub}/>
        <LinkItem name={"LinkedIn"} Icon={FaLinkedin}/>
        <LinkItem name={"Resume"} Icon={IoIosPaper}/>
        <button className=' bg-[#F9FAFB] dark:bg-[#0F172A] p-1.5 rounded-full cursor-pointer mb-0' onClick={toggleDarkMode}>
          {!isDark && <MdNightlight size={22}></MdNightlight>}
          {isDark && <MdLightMode size={22} color='white'></MdLightMode>}
        </button>
      </nav>
    </>
  )
}

export default Navigation;
