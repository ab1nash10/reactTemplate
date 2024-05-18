import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const toggleDarkMode = () => {
    themeMode === "dark" ? setThemeMode("light") : setThemeMode("dark");
  };
  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, toggleDarkMode }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
