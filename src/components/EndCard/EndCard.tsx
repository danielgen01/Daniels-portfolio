import calendarcheck from "/Assets/calendar-check-01.png"
import logo from "/Assets/Logo.png"
import { BsLinkedin, BsGithub } from "react-icons/bs"

const EndCard = () => {
  return (
    <>
      <section className="bg-[#26262C] min-h-[200px] endcard">
        <div className="endcard-content px-5 py-10 flex flex-col items-center gap-5">
          <h1 className="text-white font-bold text-center text-4xl">
            Let's build
            <br /> something together
          </h1>
          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 rounded-xl text-white font-semibold flex items-center gap-2">
            Schedula a free call
            <img src={calendarcheck} alt="calendar" />
          </button>
          <div className="border-b-2 border-white/50 w-full"></div>
          <img src={logo} alt="Logo" />

          <div className="socials flex items-center gap-4">
            <p className="text-white text-left font-semibold">
              Stay tuned in loop:
            </p>
            <a
              href="https://www.linkedin.com/in/daniel-gendik-b7b277254/"
              target="_blank"
            >
              <BsLinkedin className="text-4xl text-[#0A66C2]" />
            </a>

            <a href="https://github.com/danielgen01" target="_blank">
              <BsGithub className="text-4xl text-[#000000]" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default EndCard
