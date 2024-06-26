import "./Roses.css";
import Home from "./Home.jsx";


function Roses({ page, setPage }) {
 const Rose = (page) => {
   return (
     <div className="rose">
     <img
         src=
         "https://images.unsplash.com/photo-1586963740689-b5928f8dda10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"     
         alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("Home");
         }}
       >
         click to home
       </a>
     </div>
   );
 };
 const Rose2 = (page) => {
   return (
     <div className="rose">
       <img
         src="https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80
"         alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("About");
         }}
       >
        Rose History
       </a>
     </div>
   );
 };
 const Rose3 = (page) => {
   return (
     <div className="rose">
       <img
         src="https://images.unsplash.com/photo-1556790989-1f992d023b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
"         alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("About Link 1");
         }}
       >
        Rose Uses
       </a>
     </div>
   );
 };


 const Rose4 = (page) => {
   return (
     <div className="rose">
       <img
         src= "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
  
    
         alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("Home Link 1");
         }}
       >
        Rose Kinds
       </a>
     </div>
   );
 };


 const Rose5 = (page) => {
   return (
     <div className="rose">
       <img
         src= 
         "https://images.unsplash.com/photo-1554486840-db3a33d9318e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHJvc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("About Link 2");
         }}
       >
        Beautiful pics
       </a>
     </div>
   );
 };
 const Rose6 = (page) => {
   return (
     <div className="rose"         aria-label="Rose dashboard review">
       <img
         src="https://images.unsplash.com/photo-1541143011610-fe5c3458686e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
         alt="leanging rose in glass"
         className="home__image"
       />
       <a
         className="roses-link"
         href={`${page}.html`}
         onClick={(e) => {
           e.preventDefault();
           setPage("Home Link 2");
         }}
       >
        Register
       </a>
     </div>
   );
 };
 return (
   <div className="roses">
 
     {page === "Home" && <Home />}
     {page === "Roses" && <Rose />}
     {page === "Roses" && <Rose2 />}
     {page === "Roses" && <Rose3 />}


     {page === "Roses" && <Rose4 />}
     {page === "Roses" && <Rose5 />}
     {page === "Roses" && <Rose6 />}


   </div>
 );
}


export default Roses;





