import React, { useEffect } from "react"; // Import useEffect
import DropLiEl from "./DropLiEl.jsx";

const Skiplink = () => {
  return (
    <a className="skiplink" href="#maincontent">
      skip to main content{" "}
    </a>
  );
};
const linames = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about.html",
  },
  {
    name: "Roses",
    path: "/Roses.html",
  },
];


const Rownav = ({ linames1, setPage, showMenu }) => {
  const handleDropdown = (e) => {
    hideAllDropdowns(); // Call the function to hide all dropdowns
    const dropdown = e.currentTarget.querySelector(".dropdown");
    dropdown.style.display = "block";
  };

  const hideAllDropdowns = () => {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.style.display = "none";
    });
  };

  const handleGlobalClick = (e) => {
    if (!e.target.closest(".global-nav__item")) {
      hideAllDropdowns();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  const list = linames1.map((item) => {
    return (
      <li
        className="global-nav__item"
        onFocus={handleDropdown}
        onMouseEnter={handleDropdown} // Add onMouseEnter event handler here
      >
        <a
          className="global-nav__link"
          href={item.path}
          onClick={(e) => {
            e.preventDefault();
            setPage(item.name);
          }}
        >
          {item.name}
        </a>
        <DropLiEl liname={item.name} setPage={setPage} />
      </li>
    );
  });
  const openul = showMenu ? "global-nav__ul_open" : "global-nav__ul_closed";

  return (
    <nav className={`global-nav`}  aria-label="Rose {`global-nav`}  review">
      <ul className={`global-nav__ul ${openul}`} aria-label="Main Menu" >{showMenu && list}</ul>
    </nav>
  );
};

export { Skiplink, linames, Rownav };
