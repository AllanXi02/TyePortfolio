import "./Header.css";
import { useState } from "react";
import { Skiplink, linames, Rownav } from "./Rownav";



function Header({ setPage, theme, handleThemeChange }) {
  const [showMenu, setShowMenu] = useState(true);
  const handleLogoClick = (e) => {
    e.preventDefault();
    setPage("Home");
  };
  return (
    <header className={`header ${theme}`}  aria-label={`header ${theme}`} >
      <Skiplink />
      <a href="/Home.html" onClick={handleLogoClick}>
        <img
          src="https://plus.unsplash.com/premium_photo-1681433347742-f8feae382124?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1806&q=80          "
          className="header__logo"
          alt="Rose Logo"
        />{" "}
      </a>
      <h1 className="header__title">Garden 🌹 RoseS   </h1>
      <button  aria-label="Toggle menu"  className="header__button" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? "Close Menu" : "Open Menu"}
      </button>
      <button  aria-label="Toggle header__theme"  className="header__theme-button" onClick={handleThemeChange}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <Rownav linames1={linames} setPage={setPage} showMenu={showMenu} />

    </header>
  );
}

export default Header;
