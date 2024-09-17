import React, { useState } from 'react';

function Navbar({ setselections }) {
  // Track the currently active section
  const [activeSection, setActiveSection] = useState('Garden'); // default to 'Garden'

  // Function to handle section selection
  const handleSectionClick = (section) => {
    setActiveSection(section); 
    setselections(section);     
  };

  return (
    <div className='flex justify-between items-center p-4'>
      <div className='text-left'>
        <h1 className='text-2xl font-bold'>SIH Wiki</h1>
      </div>

      
      <div className='text-center bg-navbarcolor py-1.5 px-1.5 rounded-full   '>
        <ul className='flex space-x-6'>
          <li>
            <button
              onClick={() => handleSectionClick('Gallery')}
              className={`px-4 py-2 rounded-full text-white font-bold transition duration-200 ${
                activeSection === 'Gallery' ? 'bg-selectedsectionColor' : 'hover:bg-navbarcolor'
              }`}
            >
              GALLERY
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionClick('Garden')}
              className={`px-4 py-2 rounded-full text-white font-bold transition duration-200 ${
                activeSection === 'Garden' ? 'bg-selectedsectionColor' : 'hover:bg-navbarcolor'
              }`}
            >
              GARDEN
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionClick('Quizz')}
              className={`px-4 py-2 rounded-full text-white font-bold transition duration-200 ${
                activeSection === 'Quizz' ? 'bg-selectedsectionColor' : 'hover:bg-navbarcolor'
              }`}
            >
              QUIZZ
            </button>
          </li>
        </ul>
      </div>

      
      <div className='text-right bg-navbarcolor py-1.5 px-1.5 rounded-full shadow-2xl'>
        <div className='text-white font-bold px-1.5 py-1.5'>LOGIN</div>
      </div>
    </div>
  );
}

export default Navbar;
