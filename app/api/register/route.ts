import {NextResponse} from 'next/server'

export async function POST(req:Request){
  const body = await req.json()
  const {login, password} = body
  if(!login && !password){
    return NextResponse.json({status:403, statusText:"Введите логин и пароль"})
  }
  if(!login){
    return NextResponse.json({status: 401, statusText: 'Введите логин'})
  }else if(!password){
    return NextResponse.json({status: 402, statusText: 'Введите пароль'})
  }
  return NextResponse.json({message:'Ку из Регистрации'})
}