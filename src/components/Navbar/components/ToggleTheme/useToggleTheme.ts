import { useEffect, useState } from "react"

export const useToggleTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const currentTheme = localStorage.getItem("theme") || "light"
        return currentTheme === "dark"
      })
    
      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add("dark")
          localStorage.setItem("theme", "dark")
        } else {
          document.documentElement.classList.remove("dark")
          localStorage.setItem("theme", "light")
        }
      }, [isDarkMode])
    
      function toggleDarkMode() {
        setIsDarkMode((prev) => !prev)
      }

      return {
        isDarkMode,
        setIsDarkMode,
        toggleDarkMode,
      }
}