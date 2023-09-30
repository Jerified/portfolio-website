import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='px-6 lg:px-0 py-8 lg:max-w-6xl md:max-w-4xl  mx-auto'>
        <div className="md:flex justify-between gap-12 items-center text-white">
            <div className="">
                <div className="bg-orange-500 w-[20re lg:w-[27.4rem] h-1" />
                <p className="font-medium text-[1.8rem] sm:text-[2.8rem] md:text-[3rem] lg:text-[3.75rem] tracking-wie lg:leading-[4rem] leading-[2.3rem] md:leading-[3rem] pt-3"><span className="text-orange-500 pr-3">Crafting</span>meaningful <br/> And impartful <br /> designs. </p>
                <div className="flex justify-between items-center pt-3 ">
                    <button className="[background:linear-gradient(-69.74deg,_#100d7f,_rgba(178,_147,_147,_0.28)_40.52%,_rgba(198,_198,_198,_0))] px-8 py-2 mt-4 rounded-[28px] lg:text-[1.5rem] text-[1rem] w-fit mx-auto md:mx-0 ">Hire me</button>
                </div>
            </div>
            <div className="flex justify-between mx-auto pt-10 md:pt-0 ">
                <Image  src="/assets/img1.png" width={439} height={457} alt='hero-img' className=' mx-auto' />
            </div>
        </div>
        
    </section>
  )
}

export default HeroSection