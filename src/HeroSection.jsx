import React from 'react'
import Gallery from './Components/Gallery'
import Garden from './Components/Garden'
import Quizz from './Components/Quizz'

function HeroSection({selectedsection}) {
  return (
    <div className='p-8'>
      {selectedsection === 'Gallery' && <Gallery />}
      {selectedsection === 'Garden' && <Garden />}
      {selectedsection === 'Quizz' && <Quizz />}
    </div>
  )
}

export default HeroSection