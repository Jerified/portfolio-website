import Image from 'next/image'
import About from './components/About'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}
