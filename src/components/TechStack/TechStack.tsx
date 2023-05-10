import techstackImage from "/Assets/Technologies.png"
import waves from "/Assets/Vektor_waves.png"

const TechStack = () => {
  return (
    <section className=" bg-bright-gray w-full overflow-x-hidden dark:bg-[#26262C] lg:h-[700px]">
      <div className="techstack-content py-5  px-5 flex flex-col gap-4">
        <img src={waves} alt="waves_icon" className=" ml-auto" />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="grid-1 flex flex-col gap-5 lg:order-2 lg:items-start">
            <h1 className="text-4xl font-bold  dark:text-white">
              Tech Stack + <br /> technologies
            </h1>
            {/* <div className="border-b-4 border-black  mt-20 ml-5 w-3/4"></div> */}
            <p className="font-semibold text-left dark:text-white lg:text-xl">
              As a dedicated web developer, I'm skilled in HTML5, CSS3,
              JavaScript, and TypeScript, enabling me to build intuitive,
              robust, and responsive web applications. I'm proficient in React
              for building fast, scalable SPAs, and Tailwind for efficient,
              custom designs. I use Git and GitHub for version control and team
              collaboration, and leverage ChatGPT to enhance work efficiency
              through automation. Committed to innovation, I constantly refine
              my skills to meet client demands.
            </p>
          </div>

          <div className="image grid-2">
            <img
              src={techstackImage}
              alt="Daniel's Techstack"
              className="h-fit w-fit"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
