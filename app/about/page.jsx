'use client'
import React from 'react'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'


export default function page() {
  const ref = useRef()
  const { scrollYProgress } = useScroll ({
    target: ref,
    offset: ['0 1', '1.5 1']
  })

  return (
    <>
    <div className='h-screen w-full'>
      
        <h1 className='mt-20'>AboutPage</h1>
    </div>
    <div className='h-screen w-full flex justify-center items-center border border-red-200'>
      <motion.div 
      ref= {ref}
      style= {{
        scale: scrollYProgress,
        opacity: scrollYProgress
      }}
      
      className='h-[70%] w-[60%] bg-blue-300'>

      </motion.div>

    </div>
    </>
  )
}
