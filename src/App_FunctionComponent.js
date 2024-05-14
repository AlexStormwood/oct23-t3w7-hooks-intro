import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("Hello world");
  const [state2, setState2] = useState("e");

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

  return (
    <div className="App">
      <h1>{message}</h1>
      {/* <h1>{state}{state2}</h1> */}
      <button onClick={() => setMessage(321654658465846)}>
        Change message
      </button>

      <input type='text' value={message} onChange={(event) => setMessage(event.target.value)} />

    </div>
  );
}

export default App;
