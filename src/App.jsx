import { useState } from 'react'
import './App.css'
import Navbar from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Projects/>
    <Contact></Contact>
    </div>
  )
}

export default App
