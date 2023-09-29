import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='px-6 py-8 lg:max-w-6xl md:mx-w-6xl mx-auto'>
        <div className="md:flex justify-between gap-12 items-center text-white">
            <div className="">
                <div className="bg-orange-500 w-[27.4rem] h-1" />
                <p className="font-normal text-5xl tracking-wide leading-[4rem] pt-3"><span className="text-orange-500 pr-3">Crafting</span>meaningful <br/> And impartful <br /> designs. </p>
                <div className="flex justify-between items-center mx-auto ">
                    <button className="bg-[#9796F0] px-8 py-2 mt-4 rounded-full ">Hire me</button>
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