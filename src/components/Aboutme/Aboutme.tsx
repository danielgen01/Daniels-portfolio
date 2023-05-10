import aboutmepic from "/Assets/about me pic.png"
import sendicon from "/Assets/send-01.png"

const Aboutme = () => {
  return (
    <section className="min-h-[500px] bg-white justify-center items-center dark:bg-[#26262C]"id="about">
      <div className="project-banner-content py-10 px-10 flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="firstt-grid-item flex justify-center items-start flex-col gap-5">
            <div className="headline flex">
              <h1 className="text-black text-4xl font-bold dark:text-white  whitespace-nowrap lg:text-5xl">
                About me
              </h1>
            </div>
            <p className="text-black mt-5 font-semibold dark:text-white lg:text-2xl">
              Hello, my name is Daniel Adrian Gendik, an ambitious, self-taught
              frontend web developer with a passion for code. From the moment I
              wrote my first lines of HTML, I knew web development was my
              calling. I thrive on learning new aspects of development, writing
              code, and bringing web applications to life. While my skills lean
              more towards development than design, I respect and appreciate the
              importance of design in the process. I prefer to focus on what I
              do best: translating designs into functional, user-friendly
              websites and solving complex coding problems.
            </p>

            <div className="buttons w-full flex justify-center gap-10 lg:justify-start">
              <a href="mailto:gendik38@gmail.com">
                <button
                  className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md px-5 py-2 text-white
            flex items-center gap-2 font-semibold hover:opacity-70 lg:text-xl"
                >
                  Contact me <img src={sendicon} alt="" />
                </button>
              </a>
              <a href="/Lebenslauf Daniel Adrian Gendik.pdf" download>
                <button className="font-bold underline-offset-1 underline dark:text-white lg:text-xl">
                  Download my CV
                </button>
              </a>
            </div>
          </div>

          <div className="second-grid-item flex justify-center items-center">
            <img src={aboutmepic} alt="aboutmePic" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme
