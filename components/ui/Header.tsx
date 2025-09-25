import Link from 'next/link'

export default function Header() {
  return <header className='bg-[#181818] w-full flex items-center justify-center text-white py-2.5 grow-0'>
    <div className='max-w-300 bg-[#181818] flex flex-row justify-between w-full px-2.5 h-10 items-center'>
      <Link href={'/'} className='font-bold text-xl'>TestProject</Link>
      <Link href={'/login'} className='border px-2.5 py-1.25 hover:bg-white hover:text-black transition-colors duration-300 ease-out font-medium'>Войти</Link>
    </div>
  </header>
}