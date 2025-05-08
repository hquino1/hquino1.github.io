import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/Navigation.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full bg-[#F9FAFB] dark:bg-[#0F172A]'>
      <Navigation />
    </div>
  )
}

export default App
