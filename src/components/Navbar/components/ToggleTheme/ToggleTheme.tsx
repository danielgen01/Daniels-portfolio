import moon from "/Assets/icon-moon.svg"
import sun from "/Assets/icon-sun.svg"
import { Switch } from "@headlessui/react"
import { useToggleTheme } from "./useToggleTheme"

const ToggleTheme = () => {
  const { isDarkMode, setIsDarkMode, toggleDarkMode } = useToggleTheme()

  return (
    <Switch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      className={`
        border-gray-400
         relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 
         transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 
         rotate-90 md:rotate-0`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        aria-hidden="true"
        className={`${
          isDarkMode ? "translate-x-9" : "translate-x-0"
        } pointer-events-none inline-flex justify-center items-center h-[34px] w-[34px] transform rounded-full 
           shadow-lg ring-0 transition duration-200 ease-in-out`}
      >
        {isDarkMode ? (
          <img
            src={sun}
            alt="Toggle theme"
            className="bg-gray-200  px-2 py-2 rounded-full dark:bg-slate-800"
          />
        ) : (
          <img
            src={moon}
            alt="Toggle theme"
            className="bg-gray-200  px-2 py-2 rounded-full"
          />
        )}
      </span>
    </Switch>
  )
}

export default ToggleTheme
