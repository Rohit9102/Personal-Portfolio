// import { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";
// import { cn } from "@/lib/utils";

// const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme")
//     if(storedTheme === "dark"){
//       setIsDarkMode(true)
//       document.documentElement.classList.add("dark");

//     }else{
//       localStorage.setItem("theme", "light");

//       setIsDarkMode(false);

//     }
//   }, [])

//   const toggleTheme = () => {
//     if (isDarkMode) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");

//       setIsDarkMode(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");

//       setIsDarkMode(true);
//     }
//   };

//   return (
//     <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden")}>
//       {isDarkMode ? (
//         <Sun className="h-6 w-6 text-yellow-300" />
//       ) : (
//         <Moon className="h-6 w-6 text-blue-900" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;


import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // default to dark

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      // Default to dark if not set or explicitly set
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md transition-all md:top-5 md:right-5"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
