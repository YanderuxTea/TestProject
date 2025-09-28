'use client'
import {AnimatePresence, motion} from 'framer-motion'
import React, {useEffect} from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    },600)
  }, [])
  return isLoading
    ? <AnimatePresence>
        <motion.div animate={{opacity:0}} transition={{duration:0.6}} className='w-full min-h-screen z-1000 bg-white dark:bg-[#181818] fixed'></motion.div>
      </AnimatePresence>
    :null
}