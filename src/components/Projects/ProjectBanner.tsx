import { Project } from "./ProjectComp"
import KanbanScreen from "/Assets/projects/preview.jpg"
import InvoiceScreen from "/Assets/projects/Invoice_screen.webp"
import ECommerceScreen from "/Assets/projects/E-Commerce-Screen.webp"
import rockpapergame from "/Assets/projects/rock_paper_scissors_lizzard_spock.png"
import starbuckscreen from "/Assets/projects/starbucks_screen_2.webp"

const ProjectBanner = () => {
  return (
    <section className=" bg-[#03315A] flex flex-col gap-4 "id="projectbanner">
      <div className="project-banner-content py-10 px-5 ">
        <div className="headline flex">
          <h1 className="text-white text-4xl font-bold lg:text-5xl">
            Projects
          </h1>
          <div className="border-b-4 border-white mt-10 ml-5 w-1/4 lg:w-1/12"></div>
        </div>

        <p className="text-white mt-5 font-semibold lg:text-2xl">
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
              "I have meticulously crafted a Kanban board from the ground up, with integrated local storage to persist user modifications. This project was realized utilizing React in conjunction with TypeScript for component creation, and Redux for efficient state management. The aesthetic appeal of the application was achieved using TailwindCSS."
            }
            githubLink={"https://github.com/danielgen01/kanbanboard-frontend"}
            liveViewLink={"https://kanban-project-by-daniel-g.netlify.app/"}
            image={KanbanScreen}
            reduxUsed={true}
          />
          <Project
            title={"Invoice Business App"}
            description={
              "I've engineered a business application geared towards efficient management of client invoices. This was accomplished by harnessing the power of React for component creation and TailwindCSS for a sophisticated and responsive design."
            }
            githubLink={"https://github.com/danielgen01/invoice-app"}
            liveViewLink={"https://invoice-app-by-daniel-g.netlify.app/"}
            image={InvoiceScreen}
            reduxUsed={true}
          />
          <Project
            title={"E-Commerce App Multipage"}
            description={
              "I've designed and developed an E-Commerce platform from the ground up, leveraging React and TypeScript for component creation, and Redux for comprehensive state management. TailwindCSS was employed to provide a sleek and intuitive user interface."
            }
            githubLink={
              "https://github.com/danielgen01/E-Commerce-with-React-Redux"
            }
            liveViewLink={"https://e-commercestore-react-redux.netlify.app/"}
            image={ECommerceScreen}
            reduxUsed={true}
          />
          <Project
            title={"Rock - Paper - Scissors - Lizard - Spock Game minimal"}
            description={
              "I've architected an advanced version of the Rock-Paper-Scissors game, utilizing React and TypeScript for development, complemented by TailwindCSS for a polished, user-friendly interface.            "
            }
            githubLink={
              "https://github.com/danielgen01/rock-paper-scissors-game"
            }
            liveViewLink={
              "https://rock-paper-scissors-by-daniel-g.netlify.app/"
            }
            image={rockpapergame}
            reduxUsed={false}
          />
          <Project
            title={"Starbucks Clone landing page (static)"}
            description={
              "I've successfully replicated the German Starbucks landing page, demonstrating my proficiency in implementing predefined designs. This project was executed using React and TypeScript for component construction, and TailwindCSS for aesthetic presentation."
            }
            githubLink={"https://github.com/danielgen01/starbucksclone"}
            liveViewLink={"https://clone-starbucks-daniel-gen.netlify.app/"}
            image={starbuckscreen}
            reduxUsed={false}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectBanner
