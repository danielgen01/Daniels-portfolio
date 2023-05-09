import techstackImage from "/Assets/Technologies.png"
import waves from "/Assets/Vektor_waves.png"

const TechStack = () => {
  return (
<section className=" bg-bright-gray w-full overflow-x-hidden">
      <div className="techstack-content py-5  px-10 flex flex-col gap-4">
        <img src={waves} alt="waves_icon" className=" ml-auto" />
        <div className="headline flex items-center">
          <h1 className="text-4xl font-bold ">
            Tech Stack + <br /> technologies
          </h1>
          <div className="border-b-4 border-black  mt-20 ml-5 w-3/4"></div>
        </div>
        <p className="font-semibold ">
          As a dedicated web developer, I'm skilled in HTML5, CSS3, JavaScript,
          and TypeScript, enabling me to build intuitive, robust, and responsive
          web applications. I'm proficient in React for building fast, scalable
          SPAs, and Tailwind for efficient, custom designs. I use Git and GitHub
          for version control and team collaboration, and leverage ChatGPT to
          enhance work efficiency through automation. Committed to innovation, I
          constantly refine my skills to meet client demands.
        </p>
        <img src={techstackImage} alt="Daniel's Techstack" />
      </div>
    </section>
  )
}

export default TechStack
