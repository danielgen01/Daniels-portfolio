import aboutmepic from "/Assets/about me pic.png"
import sendicon from "/Assets/send-01.png"

const Aboutme = () => {
  return (
    <section className="min-h-[500px] bg-white justify-center items-center dark:bg-[#26262C]">
      <div className="project-banner-content py-10 px-10 flex flex-col gap-4">
        <div className="headline flex">
          <h1 className="text-black text-4xl font-bold dark:text-white">About me</h1>
          <div className="border-b-4 border-black mt-10 ml-5 w-1/4  dark:border-white"></div>
        </div>

        <p className="text-black mt-5 font-semibold dark:text-white">
          Hello, my name is Daniel Adrian Gendik and I'm a ambitious self taught
          frontend web developer, who dreams about code. As I wrote my first few
          lines of simple HTML , I instantly knew that I'll one day become a web
          dev. I love to write code and learn new things about developing.
          Admittedly I'm not the best designer, but my passion is to develop web
          applications and solve code problems - not to design it. I'll better
          leave this part to the designers and develop the website using their
          design.
        </p>
        <div className="buttons w-full flex justify-center gap-10">
          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md px-5 py-2 text-white
            flex items-center gap-2 font-semibold hover:opacity-70"> 
            Contact me <img src={sendicon} alt="" />
          </button>
          <button className="font-bold underline-offset-1 underline dark:text-white">
            Download my CV
          </button>
        </div>
        <img src={aboutmepic} alt="aboutmePic" className="w-[85%]" />
      </div>
    </section>
  )
}

export default Aboutme
