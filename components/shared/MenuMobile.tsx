import {motion} from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function MenuMobile({setIsMenuOpen}: {setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  return <>
      <motion.div className='flex flex-col fixed z-10 w-full max-h-screen py-20 overflow-y-scroll px-2.5' initial={{transform:'translateY(-100%)'}} animate={{transform: 'translateY(0%)'}} exit={{transform: 'translateY(-100%)'}}>
        <Link href='/auth/login' onClick={()=>setIsMenuOpen(prevState => !prevState)} className='w-full text-center rounded-md bg-blue-400 dark:bg-blue-500 text-md font-medium text-white py-1'>Войти</Link>
      </motion.div>
      <motion.div className='min-h-screen fixed z-9 w-full bg-white dark:bg-[#181818]' initial={{transform:'translateY(-100%)'}} animate={{transform: 'translateY(0)'}} exit={{transform: 'translateY(-100%)'}}>
      </motion.div>
  </>
}