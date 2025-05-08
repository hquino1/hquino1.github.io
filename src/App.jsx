import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/Navigation.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full bg-[#F9FAFB] dark:bg-[#0F172A] flex'>
      <Navigation />
      <div class="flex-1 p-8 overflow-y-auto">
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
