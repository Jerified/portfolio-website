import Image from 'next/image'
import About from './components/About'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
    </main>
  )
}
