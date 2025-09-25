import {AnimatePresence, motion} from 'framer-motion'

export default function AnimateCounter({count}: {count: number }) {
  return <>
    <AnimatePresence mode='sync'>
      <motion.span className='absolute' key={count} initial={{y:15, opacity:1, scale:0.5}} animate={{y:0,opacity:1, scale:1}} exit={{y:-15, opacity:0, scale:0.5}} transition={{duration:0.5, type:'spring'}}>{count}</motion.span>
    </AnimatePresence>
    <span className='text-transparent'>{count}</span>
  </>
}