import Image from 'next/image'
import React from 'react'

type TProps = {
    title: string,
    description: string,
    image: string,
    buttonText: string
}

const ProjectDetail = ({title, description, image, buttonText}: TProps) => {
  return (
    <div className=''>
        <div className="md:grid grid-cols-1 md:grid-cols-2 md:gap-6 justify-between items-center pt-12 w-full">
            <div className="">
                <h1 className="text-3xl text-center lg:text-left">{title}</h1>
                <p className="pt-5 lg:max-w-[30rem]">{description}</p>
                <button className="[background:linear-gradient(-69.74deg,_#100d7f,_rgba(178,_147,_147,_0.28)_40.52%,_rgba(198,_198,_198,_0))] px-8 py-2 mt-4 rounded-[28px] lg:text-[1.5rem] text-[1rem] w-fit mx-auto md:mx-0 flex justify-center">{buttonText}</button>
            </div>
            <div className="flex justify-between mx-auto lg:m-0 pt-10 md:pt-0 lg:justify-end ">
                <Image  src={image} width={439} height={457} alt='hero-img' className=' mx-auto lg:m-0'/>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetail