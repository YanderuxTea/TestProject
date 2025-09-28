import Header from '@/components/ui/Header'
import Preview from '@/components/ui/Preview'
import Footer from '@/components/ui/Footer'
import Preloader from '@/components/ui/Preloader'

export default function page() {
  return <main className='flex flex-col min-h-screen'>
    <Preloader/>
    <Header/>
    <Preview/>
    <Footer/>
  </main>
}