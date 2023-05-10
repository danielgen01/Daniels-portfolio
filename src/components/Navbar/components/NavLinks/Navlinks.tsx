import { Link } from "react-scroll"

const Navlinks = () => {
  return (
    <>
      <Link
        to="introduction"
        smooth={true}
        className="text-black dark:text-white hover:text-sky-500 hover:font-bold hover:underline duration-150 underline-offset-2 cursor-pointer"
      >
        Home
      </Link>
      <Link
        to="techstack"
        smooth={true}
        className="text-black dark:text-white hover:text-sky-500 hover:font-bold hover:underline duration-150 underline-offset-2 cursor-pointer"
      >
        Techstack
      </Link>
      <Link
        to="projectbanner"
        smooth={true}
        className="text-black dark:text-white hover:text-sky-500 hover:font-bold hover:underline duration-150 underline-offset-2 cursor-pointer"
      >
        Projects
      </Link>
      <Link
        to="about"
        smooth={true}
        className="text-black dark:text-white hover:text-sky-500 hover:font-bold hover:underline duration-150 underline-offset-2 cursor-pointer"
      >
        About
      </Link>
    </>
  )
}

export default Navlinks
