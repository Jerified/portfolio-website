import React from 'react'
import { Roboto } from "@next/font/google"

// const text = Roboto({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: "--roboto-font"
// })

const About = () => {
  return (
    <div className="bg-white w-full  ">
      <div className="lg:max-w-6xl md:mx-w-4xl mx-auto  ">
        <div className="md:flex md:gap-16 py-12 items-cente px-6">
          <div className="w-full">
            <div className="w-[20rem] h-[20rem] bg-orange-500 mx-auto" />
          </div>
          <div className="pt-8 md:max-w-md">
            <h1 className="text-3xl pb-6 font-semibold text-center">About <span className="text-orange-500">Me</span></h1>
            <p className="">
              I am experienced and creative product designer with passion for crafting exceptional user experiences. I am specialize in translating user needs into intuitive and visually appealing designs, proficient in user research, prototyping and design software, skilled in Figma, sketch and invision committed to delevering innovative solutions that align with business goals and delight users.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About