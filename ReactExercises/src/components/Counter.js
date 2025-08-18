import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px'
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <h2>Count: {count}</h2>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={buttonStyle} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
