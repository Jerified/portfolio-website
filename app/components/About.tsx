import React from 'react'
import { Roboto } from "@next/font/google"
import Image from 'next/image'

// const text = Roboto({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: "--roboto-font"
// })
<Image src="/assets/img2.png" width={439} height={457} alt='about-img' className='object-cover' />

const About = () => {
  return (
    <div id='#about' className="bg-white relative w-full  overflow-hidden ">
      <div className="px-6 max-w-6xl mx-auto">
        <div className="lg:grid grid-cols-2 justify-between items-center lg:max-xl:gap-[12rem] gap-10 lg:gap-28 pb-20 py-6 md:py-12 items-cente mx-6 lg:mx-0 flex flex-col-reverse">
          <div className="relative w-full h-[25rem] md:h-[32.5rem] flex justify-center items-center">
            <div className="absolute top-[0rem] left-[0rem] bg-orangered w-full md:w-[25rem] lg:w-[30.94rem] md:h-[25rem] lg:h-[29.94rem]" />
            <div className="absolute top-[2.38rem] md:left-[4rem] lg:left-[5.19rem] w-full h-full md:w-[25rem] lg:w-[30.94rem] md:h-[25rem] lg:h-[29.94rem] overflow-hidden ">
              <div className="absolute md:top-[0.19rem] bg-black w-full h-full md:w-[25rem] lg:w-[30.94rem] md:h-[25rem] lg:h-[29.94rem] " />
              <Image quality={100} src="/assets/img2.png" width={439} height={457} alt='about-img' className='absolute top-[0rem] h-ful mx-auto flex justify-center w-[10rem md:left-[1.81rem] md:w-[23.31rem] md:h-[25.25rem] lg:w-[27.31rem] lg:h-[30.13rem] object-cover' />
            </div>
          </div>
          {/* <div>hello</div> */}
          <div className="pt-16 md:pt-0 order- ">
            <h1 className="text-3xl pb-6 font-medium text-center">About <span className="text-orangered">Me</span></h1>
            <p className="text-gray ">
              I am experienced and creative product designer with passion for crafting exceptional user experiences. I am specialize in translating user needs into intuitive and visually appealing designs, proficient in user research, prototyping and design software, skilled in Figma, sketch and invision committed to delivering innovative solutions that align with business goals and delight users.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About