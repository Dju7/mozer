'use client'
import { Parallax } from 'react-scroll-parallax';
import Card from './components/card/Card'
import {motion, useScroll} from 'framer-motion'
import { useRef } from 'react'


export default function Home() {
  const ref = useRef()
  const { scrollYProgress } = useScroll ({
    target: ref,
    offset: ['0 1', '1.5 1']
  })

  
  return (
   <>
    <main> 
      <section className="w-full h-screen flex justify-center items-center">
        <div className="h-[96%] w-[97%] bg-home bg-cover bg-center flex flex-col ">
          <h1 className="w-full h-42 text-8xl text-white ml-4 mt-4 font-bold"> TITRE</h1>

        </div>
      </section>
      <section className='h-screen w-full flex justify-center items-center '>
      <motion.div 
      ref= {ref}
      style= {{
        scale: scrollYProgress,
        opacity: scrollYProgress
      }}
      
      className='h-[70%] w-[60%] bg-blue-300'>

      </motion.div>

    </section>
      <section className="w-full h-screen flex flex-col justify-start items-center bg-gray-100">
        <div className='w-[60%] h-[35%] flex flex-col justify-start items-center'>
           <h2 className='text-7xl w-full h-36 flex justify-center items-center'>Titre H2</h2>
           <h3 className='text-3xl w-full h-12  flex justify-center items-center'>Ceci est un sous-titre non-determiné</h3>
        </div>
        <div className='w-[70%] h-[50%] flex justify-center items-center gap-2 '>

          <div className='h-full w-[30%] border-2 '>
            <Card />
          </div>

          <div className='h-full w-[30%] border-2'>
          <Card />
          </div>

          <div className='h-full w-[30%] border-2'>
          <Card />
          </div>

        </div>
      </section>

      <div className='w-full h-[500px] overflow-hidden relative'>
      <Parallax translateY={[-50, 40]}>
        <img src='/imgparallax.jpg' className='overflow-hidden object-contain'/> 
      </Parallax>
      </div>

      <section className="w-full h-screen flex flex-col justify-start items-center">
      <div className='w-[60%] h-[35%] flex flex-col justify-start items-center'>
           <h2 className='font-bold text-6xl w-full h-28 flex justify-start items-center bg-clip-text text-transparent bg-parallax bg-center'>Hello World</h2>        
    
        </div>
      </section>   
    </main>
    </>
    
  );
}
