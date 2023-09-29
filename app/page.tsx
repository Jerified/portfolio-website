import Image from 'next/image'
import About from './components/About'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
    </main>
  )
}
