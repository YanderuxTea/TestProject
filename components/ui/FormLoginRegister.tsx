'use client'
import {InputsFormData} from '@/public/InputsFormData'
import Input from '@/components/shared/Input'
import React, {FormEvent, useEffect} from 'react'
import {useParams} from 'next/navigation'
import {AuthContext} from '@/public/features/context/AuthContext'
export default function FormLoginRegister() {
  const params = useParams()
  const [isPending, setIsPending] = React.useState(false)
  const [text, setText] = React.useState(params.type === 'login'?'Зарегистрироваться':'Войти')
  const setIsError = React.useContext(AuthContext)
  async function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(isPending) return
    setIsPending(true)
    try {
      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData.entries())
      const endpoint = params.type === 'login' ? '/api/login' : '/api/register'
      const res = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await res.json()
      if(json.status === 403){
        setIsError(json.statusText)
      }
      if(json.status === 401) {
        setIsError(json.statusText)
      }else if(json.status === 402) {
        setIsError(json.statusText)
      }
    }catch (error){
      setIsError(typeof error === 'string'? error:'Ошибочка')
    }finally {
      setIsPending(false)
    }
  }
  useEffect(() => {
    setTimeout(()=>{
      if( params.type === 'login'){
        setText('Войти')
      }else{
        setText('Зарегистрироваться')
      }
    },150)
  }, [])
  return<form onSubmit={handleSubmit} className='flex flex-col gap-5'>
    {InputsFormData.map((item, index) => {return<Input key={index} type={item.type} name={item.name}/>})}
    <button type='submit' className={`transition-colors duration-300 ease-in-out w-full border font-medium rounded-2xl py-1 ${isPending?'bg-gray-300 text-gray-500 border-gray-400':'border-blue-400 dark:border-blue-500 hover:bg-blue-400 dark:hover:bg-blue-500 hover:text-white cursor-pointer'}`}>{params.type==='login'?isPending?'Входим':text:isPending?'Регистрируем':text}</button>
  </form>
}