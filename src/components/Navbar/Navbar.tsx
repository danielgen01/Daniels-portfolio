import { DownloadCV } from "./components/DownloadBtn/DownloadCV"
import Logo from "./components/Logo/Logo"
import MenuIcon from "./components/MenuIcon/MenuIcon"
import ToggleTheme from "./components/ToggleTheme/ToggleTheme"
import Navlinks from "./components/NavLinks/Navlinks"
import TouchMenu from "./components/TouchMenu/TouchMenu"
import {useState} from "react"

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav
        className="h-24 shadow-md w-screen bg-white dark:bg-black px-4
      
       "
      >
        <div className="nav-content px-5 py-5 flex items-center gap-2 justify-between">
          <div className="logo">
            <Logo />
          </div>
          <div className="navlinks  gap-6 text-lg hidden lg:flex">
            <Navlinks />
          </div>
          <div className="sidebuttons flex items-center gap-5">
            <ToggleTheme />
            <DownloadCV />
            <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
          </div>
        </div>
        <TouchMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      </nav>
    </>
  )
}

export default Navbar
