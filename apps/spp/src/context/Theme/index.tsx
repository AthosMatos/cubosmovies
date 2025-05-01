import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: string | null;
  toogleTheme: () => void;
  setupTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("currentTheme") === "dark" ||
      (!("currentTheme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light"
  );

  const toogleTheme = () => {
    const currentTheme = localStorage.getItem("currentTheme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("currentTheme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  };
  const setupTheme = () => {
    const tm =
      localStorage.getItem("currentTheme") === "dark" ||
      (!("currentTheme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", tm);
    const currTheme = tm ? "dark" : "light";
    localStorage.setItem("currentTheme", currTheme);

    setTheme(currTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme, setupTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
