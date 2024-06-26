import "./Home.css";

function Home() {
  return (
    <div className="home" aria-label="home of Rose" >
       
      <h2 className="home__title" > Rose Intro</h2>
      <div className="home__content">
        <img
          src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
          alt="leanging rose in glass"
          className="home__image"
        />
        <p className="home__description">
        Roses are woody plants in the genus Rosa known for their showy flowers. There are over 150 species in the genus and thousands of cultivated hybrids. There are so many different types of roses! But enough numbers, roses are a symbol of romance and beauty! They have captivated culture throughout history and inspired poems and art along the way. Flowers are often used as a form of communication too! Needless to say, there is so much to love about roses. 
        </p>
      </div>
    </div>
  );
}

export default Home;
