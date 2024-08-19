'use client'
import { useState } from 'react'
import Nav from '../nav/Nav';
import { AnimatePresence} from 'framer-motion'

function Header() {

    const [open, setOpen] = useState(false);
    
    const handleMenu = () => {
        setOpen(!open);
      }

      const handleCloseMenu = () => {
        setTimeout(() => {
            setOpen(false);
        }, 1300); 
    };


  return (
    <div className="fixed z-40 top-0 right-0 h-40 w-44  flex justify-center items-center">
      <button onClick={handleMenu} className=" relative z-40 h-14 w-14 rounded-full bg-sky-400 flex flex-col justify-center items-center ">   
        <span className={`block absolute h-[2px] w-8 text-white bg-white transform transition duration-400 ease-in-out ${open ? 'rotate-45 translate-y-0.18' : ''}`} />
        <span className={`block absolute h-[2px] mt-2 w-8 text-white bg-white transform transition duration-400 ease-in-out ${open ? '-rotate-45 -translate-y-1' : ''}`}/>
      </button>
      <AnimatePresence mode='wait'>
      {open && <Nav onClose={handleCloseMenu}/>}
      </AnimatePresence>
    </div>
  )
}

export default Header
