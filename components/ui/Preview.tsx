'use client'
import Cat from '@/public/svg/Cat.svg'
import {motion} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'
import AnimateCounter from '@/components/shared/AnimateCounter'
import localforage from 'localforage'

export default function Preview() {
  const [count, setCount] = useState<number>(0)
  const randomRotate = useRef<number>(0)
  function getTimesWord(n: number) {
    const lastTwo = n % 100
    const last = n % 10
    if (lastTwo >= 11 && lastTwo <= 14) return 'раз'
    if (last === 1) return 'раз'
    if (last >= 2 && last <= 4) return 'раза'
    return 'раз'
  }
  useEffect(() => {
    (async ()=>{
      try{
        const storedCount = await localforage.getItem('count')
        if(typeof storedCount === 'number'){
          setCount(storedCount)
        }
      }catch (error){
        console.log('Ошибка при загрузке счетчика', error)
      }
    })()
  }, [])
  useEffect(() => {
    (async ()=>{
      try {
        await localforage.setItem('count', count)
      }catch (error){
        console.log('Ошибка', error)
      }
    })();
    const min = -5;
    const max = 5;
    randomRotate.current = Math.floor(Math.random() * (max - min)) + min;
  }, [count])
  return <section className='grow flex justify-center items-center p-2.5'>
    <article className='text-wrap flex flex-col gap-5 text-center items-center'>
      <h1 className='text-balance font-extrabold text-3xl'>Это тестовый проект для освоения backend разработки</h1>
      <p className='text-xl'>Создан разработчиком TeaWithSugar для себя</p>
      <motion.div className='cursor-pointer' whileTap={{scale: 0.9, rotate:randomRotate.current}} whileHover={{scale: 1.1}} transition={{type:'spring', duration:0.7, bounce:0.7}} onClick={()=>setCount(prevState => prevState + 1)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={Cat.src} alt="Котик" draggable={false} />
      </motion.div>
      <p className='text-lg font-medium relative'>Вы тапнули котика: <AnimateCounter count={count}/> {getTimesWord(count)} :з</p>
    </article>
  </section>
}