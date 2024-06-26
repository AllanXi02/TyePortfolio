import React, { useEffect } from "react";
import "./Footer.css";

function Footer({ setPage, theme }) {
  const footer_address = [
    {
      name: "Home Link 1",
      path: "/Pravacy.html",
    },
    {
      name: "Home Link 2",
      path: "/about.html",
    },
    {
      name: "About Link 1",
      path: "/Seattle.html",
    },
    {
      name: "About Link 2",
      path: "/Boston.html",
    },

  ];

  const footer_address2 = [
    {
      name: "Home",
      path: "/Home.html",
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

  const FooterFirstFunction = ({ footerProp }) => {
    const li = footerProp.map((item) => {
      return (
        <li className="footer-nav__li1">
          <a className="footer-nav__address1" href={item.path}
          onClick={(e) => {
            e.preventDefault();
            setPage(item.name);
          }}
          >
            {item.name}
          </a>
        </li>
      );
    });

    return (
      <nav className="footer-nav1">
        <div className="footer-nav0">
          <a className="footer-nav__address0" href="http://localhost:3000/"
            onClick={handleLogoClick}
          >
            Rose
          </a>
        </div>
        <ul className="footer-ul1">{li}</ul>
      </nav>
    );
  };

  const FooterSecondFunction = ({ footerProp }) => {
    const li = footerProp.map((item) => {
      return (
        <li className="footer-nav__li">
          <a className="footer-nav__address" href={item.path}
          onClick={(e) => {
            e.preventDefault();
            setPage(item.name);
          }}
          >
            {item.name}
          </a>
        </li>
      );
    });
    return (
      <nav className="footer-nav">
        <ul className="footer-ul">{li}</ul>
      </nav>
    );
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setPage("Home");
  };

  return (
    <footer className="footer"  aria-label="footer OF Rose ">
      <FooterFirstFunction footerProp={footer_address2} />
      <FooterSecondFunction footerProp={footer_address} />
    </footer>
  );
}

export default Footer;
