'use client'
import React, { useState } from 'react'
import { motion} from 'framer-motion'


export default function Template({
    children
}:{
    children: React.ReactNode
}) {

    const [animateBlueDiv, setAnimateBlueDiv] = useState(true);

    const handleAnimationComplete = () => {
        setAnimateBlueDiv(false);
    };


  return (
   <>  
      <motion.div
        className='fixed bottom-0 z-20 h-[100vh] w-full bg-gray-700'
        initial={{ scaleX: 0, transformOrigin: 'right' }}
        animate={animateBlueDiv ? { scaleX: 1} : { scaleX: 0 }}
        transition={{ duration: 1 }}
        onAnimationComplete={handleAnimationComplete}
      />  
               
      <motion.div
        className='h-screen w-full'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay: 0.9, duration:1}}
      >   
        {children}
        
      </motion.div>        
    </>
  )
}