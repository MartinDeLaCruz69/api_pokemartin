import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';          //dependencies are imported in this part
import './App.css'; 

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon'     //In this part the api connection is made 
  const [pokemon, setPokemon] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status)                      //This part is reflected in the console
    const responseJSON = await response.json()
    setPokemon(responseJSON)
    console.log(responseJSON)
}

useEffect(() => {
  fetchApi()
}, []) 
                                                       //In this part the class is called with the name
return (
    <div className="App">                             
      <h1>Pokemon of Martin </h1>                     
        <div className='pokemonInfo'>                  
        <ul>
                                                      

        </ul>
      </div>
    </div>
  );
}

export default App;