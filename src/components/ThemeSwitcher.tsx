import { useEffect, useState } from "react";
import { Sun, Moon } from "../components/icons";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (window.matchMedia("prefer-color-schema: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      onClick={handleThemeSwitch}
      className='px-3 py-2 bg-white dark:bg-black rounded'
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeSwitcher;
