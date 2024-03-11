import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from "next/navigation";

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
    <motion.nav 
    variants={slide}
    initial='initial'
    animate='enter'
    exit='exit'
    className="fixed z-10 right-0 top-0 bg-gray-700  h-[100vh] w-[400px] flex justify-center items-center text-white"
    >
        <motion.div
        initial={{ scale: 0, opacity: 0}}
        animate={{scale: 1.3, opacity: 100}}
        transition={{delay: 0.4, duration: 0.5}}
        className=" h-[60%] w-[50%] flex flex-col justify-center items-center gap-6"
        >
        {
            navItems.map( (item, index) => (
                <Link href={item.href} key={index} className={pathname === `${item.href}` ? "active" : ""}>{item.title}</Link>
            ))
        }
        </motion.div>
      
    </motion.nav>
  )
}
