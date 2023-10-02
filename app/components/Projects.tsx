import React from 'react'
import ProjectDetail from './ProjectDetail'

const Projects = () => {
  return (
    <section className="text-white bg-whit px-6 max-w-6xl mx-auto">
        <p className="text-center pt-6 text-[2.24rem] font-medium text-[background:linear-gradient(from_180deg_at_50%_50%,_#ff6525_-16.87deg,_#ff6525_50.63deg,_rgba(99,_233,_168,_0.99)_225deg,_#ff6525_343.13deg,_#ff6525_410.63deg)]">My Works</p>
        <div className="w-full">
            <ProjectDetail title={"Ibronlink Web-App"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore itaque unde error officiis fugiat doloribus architecto libero illo molestias id doloremque, quis velit, consectetur nostrum natus in! Necessitatibus, soluta dolor."} image={"/assets/img1.png"} buttonText={"Learn More"}  />
        </div>
        <div className="">
            <ProjectDetail title={"Ibronlink Web-App"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore itaque unde error officiis fugiat doloribus architecto libero illo molestias id doloremque, quis velit, consectetur nostrum natus in! Necessitatibus, soluta dolor."} image={"/assets/img1.png"} buttonText={"Learn More"}  />
        </div>
        <div className="">
            <ProjectDetail title={"Ibronlink Web-App"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore itaque unde error officiis fugiat doloribus architecto libero illo molestias id doloremque, quis velit, consectetur nostrum natus in! Necessitatibus, soluta dolor."} image={"/assets/img1.png"} buttonText={"Learn More"}  />
        </div>
    </section>
  )
}

export default Projects