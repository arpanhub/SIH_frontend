import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import {useState} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [selectedsection,setselections] = useState('garden')
  return (
   <div className='bg-customBg min-h-screen'>
      <Navbar setselections={setselections}/>
      <HeroSection selectedsection={selectedsection}/>
   </div>
  )
}

export default App