import Monitor from '@/public/svg/Monitor'
import Sun from '@/public/svg/Sun'
import Moon from '@/public/svg/Moon'
import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import {useTheme} from 'next-themes'

export default function AnimateSwitcherThemes() {
  const arrayButton = ['system', 'light', 'dark']
  const [currentButton, setCurrentButton] = useState<number>(-1)
  function changeTheme(theme:string, index:number) {
    setTheme(theme)
    setCurrentButton(index)
  }
  const {setTheme, theme} = useTheme()
  useEffect(() => {
    arrayButton.map((themeButton,index)=>{
      if(themeButton === theme){
        setCurrentButton( index)
      }})
  }, [])
  return <div className='border flex items-center p-1 rounded-full border-[#212121]/20 dark:border-[#212121]'>
    {arrayButton.map((buttonSet,index) => {
      return <button className='relative w-10 aspect-square' key={index} onClick={()=>changeTheme(buttonSet, index)}>
        <div className='z-1 absolute inset-0 flex justify-center items-center cursor-pointer'>{buttonSet==='system'?<Monitor/>:buttonSet==='light'?<Sun/>:<Moon/>}</div>
        {index===currentButton?<motion.div layoutId='backgroundButton' transition={{type:'spring', bounce:0.2}} className='absolute w-full border border-gray-300 bg-white dark:bg-[#202020] z-0 inset-0 rounded-full'></motion.div>:null}
      </button>
    })}
  </div>
}