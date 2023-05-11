import { Link } from "react-scroll"

type TouchMenuProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
}
const TouchMenu: React.FC<TouchMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      <div
        className="bg-black/50 fixed top-30 left-0 w-screen h-screen cursor-pointer overflow-x-hidden"
        style={{ display: isMenuOpen ? "block" : "none" }}
        onClick={toggleMenu}
      ></div>
      <div
        className="Touch-menu w-screen bg-dark-bg min-h-[200px] z-50 absolute overflow-x-hidden px-0 mx-0 left-0"
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        <div className="menu-content flex flex-col">
          <Link
            onClick={toggleMenu}
            to="introduction"
            smooth={true}
            className="text-white hover:font-bold w-full duration-150 
        underline-offset-2 cursor-pointer hover:bg-gradient-to-r from-sky-500 to-indigo-500 py-4 pl-10"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            to="techstack"
            smooth={true}
            className="text-white hover:font-bold w-full duration-150 
        underline-offset-2 cursor-pointer hover:bg-gradient-to-r from-sky-500 to-indigo-500 py-4 pl-10"
          >
            Techstack
          </Link>
          <Link
            onClick={toggleMenu}
            to="projectbanner"
            smooth={true}
            className="text-white hover:font-bold w-full duration-150 
        underline-offset-2 cursor-pointer hover:bg-gradient-to-r from-sky-500 to-indigo-500 py-4 pl-10"
          >
            Projects
          </Link>
          <Link
            onClick={toggleMenu}
            to="about"
            smooth={true}
            className="text-white hover:font-bold w-full duration-150 
        underline-offset-2 cursor-pointer hover:bg-gradient-to-r from-sky-500 to-indigo-500 py-4 pl-10"
          >
            About
          </Link>
        </div>
      </div>
    </>
  )
}

export default TouchMenu
