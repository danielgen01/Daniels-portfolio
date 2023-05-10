import { SiReact, SiTypescript, SiRedux, SiTailwindcss } from "react-icons/si"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
type ProjectProps = {
  image: string
  title: string
  description: string
  liveViewLink: string
  githubLink: string
}
export const Project: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  githubLink,
  liveViewLink,
}) => {
  return (
    <div
      className="grid-layout grid grid-cols-1 2xl:grid-cols-2 mx-10 mt-10 bg-gray-500/10 rounded-md p-5
    ring-4 ring-white 
    "
    >
      <div className="grid-item-image-container flex flex-col gap-10 order-2 lg:order-1 justify-between">
        <img src={image} alt="E-Commerce-Screenshot" className="rounded-xl ring-sky-500 ring-4"/>
        <div className="used-technologies-list flex flex-row gap-10 text-4xl lg:text-6xl">
          <SiReact className="text-[#61DBFB]" />
          <SiTypescript className=" text-[#007acc]" />
          <SiRedux className="text-purple-700" />
          <SiTailwindcss className="text-sky-500" />
        </div>
        <div className="buttons grid grid-cols-1 lg:grid-cols-2 gap-5">
          <a
            href={liveViewLink}
            target={"_blank"}
            className="bg-gradient-to-r from-sky-500 to-indigo-500 px-2 py-2 rounded-md font-medium hover:opacity-75 flex items-center gap-2 w-full justify-center text-white"
          >
            View Livedemo
            <BsArrowUpRight />
          </a>
          <a
            href={githubLink}
            className="bg-white px-2 py-2 rounded-md font-medium hover:opacity-75 flex items-center justify-center gap-2 w-full "
            target={"_blank"}
          >
            <BsGithub className="h-[20px] w-fit text-[#171515] max-w-fit  github" />
          </a>
        </div>
      </div>
      <div className="project-description text-white flex flex-col items-center gap-5 justify-around">
        <h1 className="font-semibold text-2xl text-center mt-2">{title}</h1>

        <p className="lg:text-2xl text-sm">{description}</p>
      </div>
    </div>
  )
}
