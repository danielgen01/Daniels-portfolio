import moon from "/Assets/icon-moon.svg"
import sun from "/Assets/icon-sun.svg"
import { useState, useEffect } from "react"
import { Switch } from "@headlessui/react"

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light"
    setTheme(currentTheme)
  }, [])

  return (
    <div className="">
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
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
            theme === "dark" ? "translate-x-9" : "translate-x-0"
          } pointer-events-none inline-flex justify-center items-center h-[34px] w-[34px] transform rounded-full 
           shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {theme === "light" ? (
            <img
              src={moon}
              alt="Toggle theme"
              className="bg-gray-200 dark:bg-dark-gray px-2 py-2 rounded-full"
            />
          ) : (
            <img
              src={sun}
              alt="Toggle theme"
              className="bg-gray-200 dark:bg-dark-gray px-2 py-2 rounded-full"
            />
          )}
        </span>
      </Switch>
    </div>
  )
}

export default ToggleTheme
