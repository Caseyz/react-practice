import React from 'react'
import Count from "./count";

function App() {
  return (
    <div
      className="App"
      style={{
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Count />
    </div>
  );
}

export default App;
