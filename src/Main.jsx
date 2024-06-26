
import Home from "./Home.jsx";
import About from "./About.jsx";
import Roses from "./Roses.jsx";
 
import Homelink1 from "./HomeLink1";
import AboutSub1 from "./AboutLink1";
import Homelink2 from "./HomeLink2";
import Aboutlinke2 from "./AboutLink2";



function Main({ page, setPage,theme }) {
  return (
    <main className={`main ${theme}`} aria-label={`Rose main-page -  ${theme}`} >
     
      {page === "Home Link 2" && < Homelink2/>}
      {page === "Home Link 1" && < Homelink1/>}
      {page === "About Link 2" && <Aboutlinke2/>}
      {page === "About Link 1" && < AboutSub1 />}

      {page === "Home" && <Home />}
      {page === "About" && <About />}
      {page === "Roses" && <Roses page={page} setPage={setPage} />}
    </main>
  );
}

export default Main;
