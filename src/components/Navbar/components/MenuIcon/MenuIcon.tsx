import { BiMenuAltLeft } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"

type MenuIconProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
}
const MenuIcon: React.FC<MenuIconProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      {isMenuOpen ? (
        <IoMdClose
          className="text-5xl cursor-pointer text-black dark:text-white lg:hidden"
          onClick={toggleMenu}
        />
      ) : (
        <BiMenuAltLeft
          className="text-5xl cursor-pointer text-black dark:text-white lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  )
}

export default MenuIcon
