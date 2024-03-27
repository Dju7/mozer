import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from "next/navigation";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const slide = {
    initial: {
        x: '100%',
    },
    enter: {
        x: '0%',
        transition: {duration: 0.8, ease: [0.76, 0, 0.24,1]}
    },
    exit: {
        x: '100%',
        transition: {duration: 0.8, ease: [0.76, 0, 0.24,1]}
    }
}


const navItems = [
    {
        title: 'HOME',
        href: '/'
    },
    {
        title: 'ABOUT',
        href: '/about'
    },
    {
        title: 'WORK',
        href: '/work'
    },
    {
        title: 'CONTACT',
        href: '/contact'
    },
]


export default function Nav() {
    const pathname = usePathname();



  return (
    <>
    <motion.nav 
    variants={slide}
    initial='initial'
    animate='enter'
    exit='exit'
    className="fixed z-30 right-0 top-0 bg-gray-700  h-screen w-[400px] flex flex-col justify-center items-center text-white"
    >
        <motion.div
        initial={{ scale: 0, opacity: 0}}
        animate={{scale: 1.3, opacity: 100}}
        transition={{delay: 0.4, duration: 0.5}}
        className=" h-[65%] w-[60%] flex flex-col justify-center items-center gap-6 text-2xl"
        >
        {
            navItems.map( (item, index) => (
                <Link href={item.href} key={index} className={pathname === `${item.href}` ? "active" : ""}>{item.title}</Link>
            ))
        }
        </motion.div>

        <div className='absolute bottom-5 text-2xl h-20 w-[70%] flex justify-center items-center gap-6'>
         <FaInstagram className='cursor-pointer hover:text-sky-400' />
         <FaTwitter className='cursor-pointer hover:text-sky-400' />
         <FaLinkedin className='cursor-pointer hover:text-sky-400'/>

        </div>
      
    </motion.nav>
    </>
  )
}
