'use client'

import AnimateSwitcherThemes from '@/components/shared/AnimateSwitcherThemes'

export default function Footer() {
  return <footer className=' bg-white dark:bg-[#181818] flex flex-col py-2.5 items-center text-left text-black dark:text-white border-t border-[#212121]/20 dark:border-[#212121] w-full'>
    <div className='max-w-300 flex flex-row gap-2.5 w-full px-2.5'>
      <AnimateSwitcherThemes/>
    </div>
  </footer>
}