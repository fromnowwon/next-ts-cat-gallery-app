"use client";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleMode = (mode: string) => {
    setTheme(mode);
  };

  return (
    <>
      {currentTheme === "dark" ? (
        <MdDarkMode
          onClick={() => toggleMode("light")}
          className="text-white text-xl cursor-pointer hover:text-primary"
        />
      ) : (
        <MdLightMode
          onClick={() => toggleMode("dark")}
          className="text-white text-xl cursor-pointer hover:text-primary"
        />
      )}
    </>
  );
}
