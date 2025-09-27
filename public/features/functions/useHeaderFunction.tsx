import {useMotionValueEvent, useScroll} from 'framer-motion'
import React from 'react'

export default function useHeaderFunction() {
  const {scrollY} = useScroll()
  const [laterScroll, setLaterScroll] = React.useState<number>(0)
  const [translateY, setTranslateY] = React.useState<number>(0)
  useMotionValueEvent(scrollY, 'change', (latest)=>{
    const currentScroll = latest>0?latest:0
    const laterSc = laterScroll>0?laterScroll:0
    if(currentScroll>laterSc){
      setTranslateY(-100)
    }else if(currentScroll<laterSc){
      setTranslateY(0)
    }
    setLaterScroll(latest)
  })
  return translateY
}