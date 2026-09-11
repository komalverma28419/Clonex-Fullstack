import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({onToggle}) => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  const handleClick = () =>{
    toggleTheme()
    onToggle?.()
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle theme"
      className="relative w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center border
        border-gray-200 bg-white shadow-sm transition-all duration-300 hover:scale-105 
        hover:shadow-md dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2
         focus:ring-primary/30"
    >
      <span
        className={`
          flex items-center justify-center transition-all duration-300${isDark ? "rotate-180" : "rotate-0"}
        `}>
        {isDark ?
         (<Sun size={20} strokeWidth={2} className="text-yellow-400transition-all duration-300"/>)
         : (<Moon size={20} strokeWidth={2} fill="currentColor" className="text-gray-700 
          transition-all duration-300"/>
        )}
      </span>
    </button>
  )
}

export default ThemeToggle;