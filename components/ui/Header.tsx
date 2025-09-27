'use client'
import Link from 'next/link'
import Menu from '@/public/svg/Menu'
import useCurrentWidth from '@/public/features/functions/useCurrentWidth'
import React, {useEffect} from 'react'
import MenuMobile from '@/components/shared/MenuMobile'
import {AnimatePresence, motion} from 'framer-motion'
import useHeaderFunction from '@/public/features/functions/useHeaderFunction'

export default function Header() {
  const currentWidth = useCurrentWidth()
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
  const translateY = useHeaderFunction()
  const [lastClick, setLastClick] = React.useState<number>(0)
  function openMenu() {
    if(Date.now() - lastClick <= 300) {
      return
    }
    setIsMenuOpen(!isMenuOpen)
    setLastClick(Date.now())
  }

  useEffect(() => {
    function resizeHandle(){
      if(currentWidth<768){
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', resizeHandle)
    return ()=>{window.removeEventListener('resize', resizeHandle)}
  }, [])
  useEffect(() => {
    if(isMenuOpen){
      document.body.style.overflow = 'hidden'
    }else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])
  return <><motion.header className='bg-white dark:bg-[#181818] w-full flex items-center justify-center  py-2.5 fixed z-100 border-b border-[#212121]/20 dark:border-[#212121]' animate={{transform: `translateY(${translateY}%)`}}>
    <div className='max-w-300 bg-white dark:bg-[#181818] flex flex-row justify-between w-full px-2.5 h-10 items-center'>
      <Link href={'/'} className='font-bold text-xl'>TestProject</Link>
      {currentWidth < 768?<button onClick={()=>openMenu()}><Menu/></button>:<Link href='/auth/login' className='border-black dark:border-white border py-1 px-2.5 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out text-md font-medium'>Войти</Link>}
    </div>
  </motion.header>
    <AnimatePresence>
      {isMenuOpen && <MenuMobile setIsMenuOpen={setIsMenuOpen}/>}
    </AnimatePresence>
  </>
}