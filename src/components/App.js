// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogsInDiv, setDogsInDiv] = useState([])
  const [isLoaded, setIsLoaded] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
          console.log(data.message)
        setDogsInDiv(data.message);
        setIsLoaded(true)
      });

    
  }, [isLoaded]);

  if (!isLoaded) return <p>Loading...</p>;

  return <img src={dogsInDiv} alt="A Random Dog"></img>
}

export default App;
