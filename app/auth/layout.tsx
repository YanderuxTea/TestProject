'use client'
import React, {useContext, useEffect} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Link from 'next/link'
import {useParams, usePathname} from 'next/navigation'
import Preloader from '@/components/ui/Preloader'
import Notification from '@/components/shared/Notification'
import {AuthContext} from '@/public/features/context/AuthContext'


export default function AuthLayout({children}: {children: React.ReactNode}) {
  const arrayForm = ['login', 'register']
  const params = useParams()
  const pathname = usePathname()
  const [isError, setIsError] = React.useState<string>('')
  return (
    <main>
      <Preloader/>
      <Header />
      <section className='min-h-screen flex justify-center items-center overflow-clip w-max mx-auto flex-col gap-2.5 max-w-300 px-2.5'>
        <AnimatePresence>
          {isError!==''?<Notification text={isError} setIsError={setIsError}/>:null}
        </AnimatePresence>
        <motion.div layout className='flex flex-col gap-5 border border-[#212121]/20 dark:border-[#212121] rounded-[36px] p-5 overflow-clip'>
          <div className='flex flex-row gap-2.5 p-2 border border-[#212121]/20 dark:border-[#212121] rounded-2xl'>
            {arrayForm.map((item, index) => {return<Link scroll={false} className='px-1 font-medium rounded-md relative' key={index} href={`/auth/${item}`}>
              <motion.p layout className={`transition-colors duration-300 ease-in-out z-1 absolute w-full h-full p-1 ${params.type===item?'text-white':'text-black dark:text-white/50'}`}>{item==='login'?'Вход':'Регистрация'}</motion.p>
              <p className='text-transparent p-1'>{item==='login'?'Вход':'Регистрация'}</p>
              {params.type === item?<motion.div layoutId='backgroundButtonForm' className='absolute inset-0 w-full h-full bg-blue-400 dark:bg-blue-500 z-0 rounded-md'></motion.div>:null}
            </Link> })}
          </div>
          <AnimatePresence mode='wait'>
            <motion.div key={pathname} initial={{transform:`translateX(${params.type==='login'?-200:200}%)`}} animate={{transform:'translateX(0%)'}} exit={{transform:`translateX(${params.type==='login'?-200:200}%)`}}>
              <AuthContext.Provider value={setIsError}>
                {children}
              </AuthContext.Provider>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>
      <Footer />
    </main>
  )
}