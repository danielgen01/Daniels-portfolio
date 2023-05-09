import { Project } from "./ProjectComp"
import KanbanScreen from "/Assets/projects/preview.jpg"
import InvoiceScreen from "/Assets/projects/Invoice_screen.webp"
import ECommerceScreen from "/Assets/projects/E-Commerce-Screen.webp"
import rockpapergame from "/Assets/projects/rock_paper_scissors_lizzard_spock.png"
import starbuckscreen from "/Assets/projects/starbucks_screen_2.webp"





const ProjectBanner = () => {
  return (
    <section className="min-h-[500px] bg-medium-blue flex flex-col gap-4">
      <div className="project-banner-content py-10 px-5 ">
        <div className="headline flex">
          <h1 className="text-white text-4xl font-bold">Projects</h1>
          <div className="border-b-4 border-white mt-10 ml-5 w-1/4 "></div>
        </div>

        <p className="text-white mt-5 font-semibold">
          Explore my diverse portfolio of web applications, reflecting my
          expertise in leveraging React, TypeScript, and Tailwind, Redux etc. .
          Each project showcases my ability to create robust, scalable, and
          user-friendly solutions that meet real-world needs. Dive in to see my
          skills in action.
        </p>

        <div className="projects-list grid grid-cols-1 md:grid-cols-2 gap-20 mt-5">
          <Project image={KanbanScreen}/>
          <Project image={InvoiceScreen}/>
          <Project image={ECommerceScreen}/>
          <Project image={rockpapergame}/>
          <Project image={starbuckscreen}/>


        </div>
      </div>
    </section>
  )
}

export default ProjectBanner


