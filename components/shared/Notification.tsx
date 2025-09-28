import {motion} from 'framer-motion'
import React, {useEffect, useRef} from 'react'

export default function Notification({text, setIsError}:{text:string, setIsError:React.Dispatch<React.SetStateAction<string>>}) {
  const timerRef = useRef<NodeJS.Timeout|null>(null)
  useEffect(() => {
    if(timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(()=>{
      setIsError('')
    },4000)
  }, [text])
  return<motion.div key={'notify'} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='font-medium bg-red-600 text-white flex items-center justify-center text-center p-2.5 rounded-md'>
      <h1 className='break-all'>{text}</h1>
     </motion.div>

}
// bg-green-600
// bg-red-600