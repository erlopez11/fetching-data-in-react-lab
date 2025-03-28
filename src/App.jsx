import { useState } from 'react'
import * as starshipService from './services/starshipService';
import './App.css'

function App() {
  const [starshipData, setStarshipData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  const fetchData = async () => {
    const data = await starshipService.index(11);
    console.log(data);
  };


  return (
    <>
      <h1>StarWars Starships</h1>
      <button onClick={fetchData}>Fetch Starship Data</button>
    </>
  )
}

export default App
