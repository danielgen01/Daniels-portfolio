import { Project } from "./ProjectComp"
import KanbanScreen from "/Assets/projects/preview.jpg"
import InvoiceScreen from "/Assets/projects/Invoice_screen.webp"
import ECommerceScreen from "/Assets/projects/E-Commerce-Screen.webp"
import rockpapergame from "/Assets/projects/rock_paper_scissors_lizzard_spock.png"
import starbuckscreen from "/Assets/projects/starbucks_screen_2.webp"

const ProjectBanner = () => {
  return (
    <section className="min-h-[500px] bg-[#03315A] flex flex-col gap-4 ">
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

        <div className="projects-list grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <Project
            title={"Kanban Task Management Business App"}
            description={
              "I built an Kanbanboard from scratch.This board is also connected to localstorage to save your changes. I used React with Typescript to build components and Redux for state management. I styled my app with TailwindCSS."
            }
            githubLink={"https://github.com/danielgen01/kanbanboard-frontend"}
            liveViewLink={"https://kanban-project-by-daniel-g.netlify.app/"}
            image={KanbanScreen}
          />
          <Project
            title={"Invoice Business App"}
            description={
              "I built an business App where you can manage client invoices. I styled my app with TailwindCSS and used React to create components."
            }
            githubLink={"https://github.com/danielgen01/invoice-app"}
            liveViewLink={"https://invoice-app-by-daniel-g.netlify.app/"}
            image={InvoiceScreen}
          />
          <Project
            title={"E-Commerce App Multipage"}
            description={
              "I built an E-Commerce store from scratch. I used React with Typescript to build components and Redux for state management. I styled my app with TailwindCSS."
            }
            githubLink={
              "https://github.com/danielgen01/E-Commerce-with-React-Redux"
            }
            liveViewLink={"https://e-commercestore-react-redux.netlify.app/"}
            image={ECommerceScreen}
          />
          <Project
            title={"Rock - Paper - Scissors - Lizard - Spock Game minimal"}
            description={
              "I built the extended version of the rock paper scissors game. I developed this project with React,TypeScript and TailwindCSS.            "
            }
            githubLink={
              "https://github.com/danielgen01/rock-paper-scissors-game"
            }
            liveViewLink={
              "https://rock-paper-scissors-by-daniel-g.netlify.app/"
            }
            image={rockpapergame}
          />
          <Project
            title={"Starbucks Clone landing page (static)"}
            description={
              "I built an clone of the german starbucks landing page to prove that I'm able to develop prefebrecated designs. I used React with TypeScript to create components and TailwindCSS for the styling."
            }
            githubLink={"https://github.com/danielgen01/starbucksclone"}
            liveViewLink={"https://clone-starbucks-daniel-gen.netlify.app/"}
            image={starbuckscreen}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectBanner
