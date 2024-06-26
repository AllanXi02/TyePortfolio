import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import { useEffect, useState } from "react";
import Title from "./title.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const [pg, setPage] = useState("Home");
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(`${theme}`);
    document.documentElement.classList.add(`${newTheme}`);
  };
  useEffect(() => {
    const oldTheme = theme === "light" ? "dark" : "light";
    const elements = document.querySelectorAll("*");
    elements.forEach((el) => {
      el.classList.remove(oldTheme);
      el.classList.add(theme);
      console.log("changed once");
    });
  }, [theme]);

  return (
    <div className="app">
      <html>
        <Header
          setPage={setPage}
          theme={theme}
          handleThemeChange={handleThemeChange}
        />
        <a id="maincontent"></a>
        <Title img="src/imgs/icon.avif" text="RoseS"  aria-label="Rose title" />
        <Main page={pg} setPage={setPage} theme={theme} />
        <Footer theme={theme} setPage={setPage} />
      </html>
    </div>
  );
}

export default App;
