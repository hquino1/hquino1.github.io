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

const LimitedNavigation = () => {
  return(
    
    <> 
      {/* Desktop navigation */}
      <nav className="dark:bg-[#1E293B] bg-[#E5E7EB] h-full w-65 p-7 font-[Outfit] z-50 fixed">
        <NavigationItem name={"About"} Icon={IoPerson} to={"/"}/>
        <NavigationItem name={"Projects"} Icon={AiFillCode} to={"/projects"}/>
        <NavigationItem name={"Skills"} Icon={AiFillRocket} to={"/skills"}/>
        
        <hr className="border-t border-gray-300 dark:border-gray-700 mx-7 mb-5" />
        <h1 className=' mb-5 text-lg text-[#111827] dark:text-[#F1F5F9]'>Social Links</h1>

        <LinkItem name={"Github"} Icon={FaGithub} link={"https://github.com/hquino1"}/>
        <LinkItem name={"LinkedIn"} Icon={FaLinkedin} link={"https://linkedin.com/in/hectorquino"}/>
        <LinkItem name={"Resume"} Icon={IoIosPaper} link={"https://github.com/hquino1/portfolio-content/blob/main/Hector_Quinones_Resume.pdf"}/>
      </nav>

    </>
  )
}

export default LimitedNavigation;
