import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("Hello world");
  const [pokemon, setPokemon] = useState({name: "", sprite: ""});


  // useEffect with empty dependency array = 
  // depends on nothing, will run when declared
  // but never again.
  useEffect(() => {
    console.log("Component loaded");
  }, []);

  // useEffect with return function = 
  // gonna call that function on componentWillUnmount
  // not related to the dependency array at all 
  useEffect(() => {
    return (() => {
      console.log("Component will unmount");
    });
  }, []);

  // useEffect with variable in dependency array = 
  // depends on variable, will run when declared AND updated 
  // but not on anything not listed in dependency array 
  useEffect(() => {
    console.log("Message updated, new value is: " + message);
  }, [message]);


  const getPokemon = async () => {
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1025) + 1}`).then(response => response.json());
    setPokemon({name: result.name, sprite: result.sprites.front_default});
  }

  useEffect(() => {
    getPokemon();
  }, []);


  return (
    <div className="App">
      <h1>{message}</h1>
      {/* <h1>{state}{state2}</h1> */}
      <button onClick={() => setMessage(321654658465846)}>
        Change message
      </button>

      <input type='text' value={message} onChange={(event) => setMessage(event.target.value)} />


      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprite} alt='URL to the sprite of whatever random Pokemon this is.' />
      <button onClick={getPokemon}>
        Get random Pokemon 
      </button>
    </div>
  );
}

export default App;
