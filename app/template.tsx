'use client'
import React from 'react'
import { motion} from 'framer-motion'


export default function Template({
    children
}:{
    children: React.ReactNode
}) {

  return (
   <>         
      <motion.div
        className='h-screen w-full'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration:0.4}}
      >   
        {children}
        
      </motion.div>        
    </>
  )
}