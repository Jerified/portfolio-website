import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from './AnimatedText'


const HeroSection = () => {

    // const text = () => {
        // <p><span className="text-orange-500 pr-3">Crafting</span>meaningful <br/> And impartful <br/> designs.</p>
    //     <p><span className="text-orange-500 pr-3">Crafting</span>meaningful <br/> And impartful <br /> designs.</p>
    // }
    // const text = <p><span>Crafting</span> meaningful <br/> And impartful <br /> designs.</p>
  return (
    <section className='px-6 py-8 max-w-6xl  mx-auto'>
        <div className="md:flex justify-between gap-12 items-center text-white">
            <div className="">
                <div className="bg-orange-500 w-[20re lg:w-[27.4rem] h-1" />
                <AnimatedText text='Crafting meaningful and impartful designs' className='font-medium text-[2.4rem] sm:text-[2.8rem] md:text-[3rem] lg:text-[3.75rem] tracking-wie lg:leading-[4rem] leading-[2.5rem] md:leading-[3rem] pt-3'repeatDelay={10000} />
                <div className="flex justify-between items-center pt-3 ">
                    <Link href='/contact' className="[background:linear-gradient(-69.74deg,_#100d7f,_rgba(178,_147,_147,_0.28)_40.52%,_rgba(198,_198,_198,_0))] px-8 py-2 mt-4 rounded-[28px] lg:text-[1.5rem] text-[1rem] w-fit mx-auto md:mx-0">Hire me</Link>
                </div>
            </div>
            <div className="flex justify-between mx-auto lg:m-0 pt-10 md:pt-0 ">
                <Image  src="/assets/img1.png" width={439} height={457} alt='hero-img' className=' mx-auto lg:m-0' />
            </div>
        </div>
        
    </section>
  )
}

export default HeroSection