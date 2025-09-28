import {useState} from 'react'
import {useParams} from 'next/navigation'

export default function Input({type, name}:{type:string, name:string}) {
  const [focused, setFocused] = useState<boolean>(false)
  const params = useParams()
  return <div className={`border flex items-center justify-center rounded-2xl relative border-blue-400 dark:border-blue-500 before:content-[""] before:absolute before:inset-0 ${focused?'before:opacity-100':'before:opacity-0'} before:transition-opacity before:duration-300 before:ease-in-out before:outline-2 before:blur-[2px] before:rounded-2xl before:outline-blue-400 dark:before:outline-blue-500 before:z-1 autofill:bg-transparent`}>
    <input onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} autoComplete={`${params.type ==='login'&&name==='password'?'current-password':params.type ==='register'&&name==='password'?'new-password':'off'}`} type={`${type}`} name={`${name}`} id={`${name}`} placeholder=' ' className='relative outline-0 px-2.5 py-1 font-medium z-3 peer'/>
    <label htmlFor={name} className='text-gray-600 dark:text-gray-400 font-medium rounded-2xl transition-all duration-300 ease-in-out w-max absolute inset-0 px-2.5 py-1 bg-white dark:bg-[#181818] -translate-y-1/2 text-[12px] translate-x-5 peer-focus:-translate-y-1/2 peer-focus:text-[12px] peer-focus:translate-x-5 peer-focus:rounded-none peer-focus:text-blue-400 dark:peer-focus:text-blue-500 peer-placeholder-shown:text-[16px] peer-placeholder-shown:translate-0 z-2 peer-focus:z-2 peer-placeholder-shown:z-0'>{`${name==='login'?'Логин':'Пароль'}`}</label>
  </div>
}