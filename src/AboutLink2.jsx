import Carousel from "./Carousel";
import "./Aboutlink2.css";
 
function Aboutlinke2() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1556790989-1f992d023b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "David Austin Roses",
    },
    {
      src: "https://images.unsplash.com/photo-1552256400-b4e8b9b3ae22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80",
      alt: "Alba Roses",
    },{
      src: "https://images.unsplash.com/photo-1606048005590-ac109542b311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      alt: "buque Roses",
    },{
      src: "https://images.unsplash.com/photo-1607427747698-851d256789ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "angelina Rose",
    }
  ];
  
  return (
    <div className="home"  aria-label="Gallery ">
      <h2> Daily Gallery </h2>
      <Carousel images= {images} /> 
     </div>
  );
}

export default Aboutlinke2;
