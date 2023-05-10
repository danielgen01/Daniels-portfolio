import { DownloadCV } from "./components/DownloadBtn/DownloadCV"
import Logo from "./components/Logo/Logo"
import MenuIcon from "./components/MenuIcon/MenuIcon"
import ToggleTheme from "./components/ToggleTheme/ToggleTheme"
import Navlinks from "./components/NavLinks/Navlinks"

const Navbar = () => {
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
            <MenuIcon />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
