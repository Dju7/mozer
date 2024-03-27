"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";


export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {

  let pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
    <motion.div
      key={pathname}
      initial={{ opacity:0 }}
      animate={{ opacity: 1,transition:{duration:1}}}
    >
      <motion.div 
      className="absolute top-0 left-0 z-10 h-full w-full bg-gray-700"
      initial={{scaleY:0, transformOrigin: "bottom"}}
      animate={{scaleY:0, transformOrigin: "bottom"}}
      exit={{scaleY:1, transformOrigin: "bottom"}}
      transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
      />
      <motion.div 
      className="absolute top-0 left-0 z-10 h-full w-full bg-gray-700"
      initial={{scaleY:1, transformOrigin: "top"}}
      animate={{scaleY:0, transformOrigin: "top"}}
      exit={{scaleY:0, transformOrigin: "top"}}
      transition={{ delai: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1]}}
      />
      {children}
      
     
    </motion.div>
    </AnimatePresence>
    
  );
}