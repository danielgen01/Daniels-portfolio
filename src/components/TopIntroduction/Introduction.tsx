import { BsDownload } from "react-icons/bs"
import portaitbg from "/Assets/portrait-bg.png"
import portrait from "/Assets/BewerbungsbildCartoon.webp"

const Introduction = () => {
  return (
    <section className="Introdocution py-10 px-20 flex flex-col gap-4 ">
      <div className="headline flex items-center">
        <h1 className="text-4xl font-bold whitespace-nowrap">Hi, I'm Daniel</h1>
        <span role="img" aria-label="waving hand" className="text-4xl">
          👋
        </span>
      </div>

      <div className="frontend-dev flex items-center gap-5">
        <div className="border-b-4 border-black w-1/4 "></div>
        <h2 className="font-bold text-lg">Frontend developer</h2>
      </div>
      <p className="font-bold text-left">
        Hello, I'm Daniel Gendik, a passionate 22-year-old Frontend Web
        Developer hailing from Germany. Scroll down to explore my projects and
        connect with me on social media.
      </p>
      <div className="button download-cv flex justify-center">
        <button
          className="bg-gradient-to-r from-sky-500 to-indigo-500 font-bold text-white 
      rounded-lg px-7 py-3 flex items-center gap-5 hover:opacity-80"
        >
          JavaScript Certificate
          <BsDownload className="text-white font-bold" />
        </button>
      </div>
      <div className="button-react-testing-certificate flex justify-center">
        <button className="underline font-bold underline-offset-2 flex items-center gap-2 whitespace-nowrap">
          React Testing Library Certificate
          <BsDownload className="text-black font-bold" />
        </button>
      </div>
      {/* <figure
        className="portrait relative  flex justify-center items-start"
       
      >
        <img src={portaitbg} alt="Portrait" className="" />
        <img src={portrait} alt="Portrait" className="absolute z-10 -pt-56" />
      </figure> */}
    </section>
  )
}

export default Introduction
