import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/Navigation.jsx'
import LimitedNavigation from './components/LimitedNavigation.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { MdNightlight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useDarkMode } from "./hooks/useDarkMode.jsx";

function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [isDark, setIsDark] = useDarkMode();

  function toggleDarkMode() {
    if (!isDark){
      setIsDark(true)
    }
    else{
      setIsDark(false)
    }
  }

  const changeNav = () =>{
    if (showNavbar)
      setShowNavbar(false)
    else
      setShowNavbar(true)
  }

  return (
    <div className='transition-colors duration-1000 w-full h-full bg-[#F9FAFB] dark:bg-[#0F172A] flex'>
      <button className='fixed dark:bg-[#1E293B] bg-[#E5E7EB] right-0 mt-5 mr-20 sm:mr-30 h-12 w-12 rounded-lg justify-center cursor-pointer 2xl:hidden z-60 text-[#111827] dark:text-[#F1F5F9]' onClick={changeNav}>
        <TiThMenu className='mx-auto text-2xl'></TiThMenu>
      </button>
      <button className=' dark:bg-[#1E293B] bg-[#E5E7EB] p-1 rounded-full cursor-pointer fixed right-0 mt-5 mr-5 sm:mr-15 h-12 w-12 z-60 text-[#111827] dark:text-[#F1F5F9] flex items-center justify-center' onClick={toggleDarkMode}>
          {!isDark && <MdNightlight size={22}></MdNightlight>}
          {isDark && <MdLightMode size={22}></MdLightMode>}
      </button>
      {showNavbar && <div className='fixed h-full w-full bg-black/50 z-40'></div>}
      {<LimitedNavigation isVisible={showNavbar}></LimitedNavigation>}
      <Navigation />
      <div class="flex-1 sm:pl-8 overflow-y-auto bg-[#F9FAFB] dark:bg-[#0F172A]">
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
