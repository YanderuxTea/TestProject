import Header from '@/components/ui/Header'
import Preview from '@/components/ui/Preview'
import Footer from '@/components/ui/Footer'

export default function page() {
  return <main className='flex flex-col min-h-screen'>
    <Header/>
    <Preview/>
    <Footer/>
  </main>
}