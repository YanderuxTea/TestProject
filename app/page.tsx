import Header from '@/public/components/ui/Header'
import Preview from '@/public/components/ui/Preview'

export default function page() {
  return <main className='flex flex-col min-h-screen'>
    <Header/>
    <Preview/>
  </main>
}