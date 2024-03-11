'use client'
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image'

export default function Home() {
  

  return (
    <main>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="h-[96%] w-[97%] bg-home bg-cover bg-center flex flex-col ">
          <h1 className="w-full h-42 text-7xl text-white ml-4 mt-4 font-bold"> TITRE</h1>

        </div>
      </section>
      <section className="w-full h-screen flex felc-col">
        <div className='w-full h-1/3 bg-white'/>

      </section>

      <div className='w-full h-[500px] overflow-hidden relative'>
      <Parallax translateY={[-50, 40]}>
      
        <img src='/imgparallax.jpg' className='overflow-hidden object-contain'/>
        
      </Parallax>
      </div>

      <section className="w-full h-screen">
        <h1>Hello World</h1>
      </section>
    </main>
  );
}
