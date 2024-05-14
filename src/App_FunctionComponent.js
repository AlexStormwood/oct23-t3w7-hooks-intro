import React, { useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("Hello world");
  const [state2, setState2] = useState("e");

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
