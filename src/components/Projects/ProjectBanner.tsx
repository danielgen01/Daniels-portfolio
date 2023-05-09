import React from "react"

const ProjectBanner = () => {
  return (
    <section className="min-h-[500px] bg-medium-blue flex flex-col gap-4">
      <div className="project-banner-content py-10 px-5 ">
        <div className="headline flex">
          <h1 className="text-white text-4xl font-bold">Projects</h1>
          <div className="border-b-4 border-white mt-10 ml-5 w-3/4 "></div>
        </div>

        <p className="text-white mt-5 font-semibold">
          Explore my diverse portfolio of web applications, reflecting my
          expertise in leveraging React, TypeScript, and Tailwind, Redux etc. .
          Each project showcases my ability to create robust, scalable, and
          user-friendly solutions that meet real-world needs. Dive in to see my
          skills in action.
        </p>
      </div>
    </section>
  )
}

export default ProjectBanner
