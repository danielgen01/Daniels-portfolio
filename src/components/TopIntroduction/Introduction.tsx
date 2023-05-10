import { BsDownload } from "react-icons/bs"
import portrait from "/Assets/BewerbungsbildCartoon.webp"
import portraitbackgroud from "/Assets/portrait-bg.png"

const Introduction = () => {
  return (
    <section className=" py-10 px-20 grid grid-cols-1 gap-4 lg:grid-cols-2 dark:bg-dark-bg min-h-[500px] lg:items-center" id="#introduction">
      <section className="flex flex-col gap-5 f">
        <div className="headline flex items-center">
          <h1 className="text-4xl font-bold whitespace-nowrap dark:text-white lg:text-7xl">
            Hi, I'm Daniel
          </h1>
          <span role="img" aria-label="waving hand" className="text-4xl">
            👋
          </span>
        </div>

        <div className="frontend-dev flex items-center gap-5">
          <div className="border-b-4 border-black w-1/4  dark:border-white lg:w-1/12"></div>
          <h2 className="font-bold text-lg whitespace-nowrap dark:text-white lg:text-2xl">
            Frontend developer
          </h2>
        </div>
        <p className="font-bold text-left dark:text-white lg:text-2xl">
          Hello, I'm Daniel Gendik, a passionate 22-year-old Frontend Web
          Developer hailing from Germany. Scroll down to explore my projects and
          connect with me on social media.
        </p>
        <div className="buttons flex flex-col lg:flex-row gap-5 w-full lg:w-3/4">
          <a href="/JS_certi.pdf" download>
            <button
              className="bg-gradient-to-r from-sky-500 to-indigo-500 font-bold text-white 
      rounded-lg px-7 py-3 flex items-center gap-5 hover:opacity-80 whitespace-nowrap"
            >
              JavaScript Certificate
              <BsDownload className="text-white font-bold" />
            </button>
          </a>
          <a href="/React_Testing_certi.pdf" download>
            <button className="underline font-bold underline-offset-2 flex items-center gap-2 whitespace-nowrap dark:text-white">
              React Testing Library Certificate
              <BsDownload className="text-black font-bold" />
            </button>
          </a>
        </div>
      </section>

      <section
        className="portrait-div flex items-start justify-center pt-0 bg-no-repeat bg-center "
        // style={{ backgroundImage: `url(${portraitbackgroud})` }}
      >
        <img src={portrait} alt="Portrait" className=" " />
      </section>
    </section>
  )
}

export default Introduction
