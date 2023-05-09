import { DownloadCV } from "./components/DownloadCV"
import Logo from "./components/Logo"
import MenuIcon from "./components/MenuIcon"
import ToggleTheme from "./components/ToggleTheme/ToggleTheme"

const Navbar = () => {
  return (
    <>
      <nav className="h-24 shadow-md w-screen bg-white  dark:bg-dark-bg">
        <div className="nav-content px-5 py-5 flex items-center gap-2 justify-between">
          <div className="logo">
            <Logo />
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
