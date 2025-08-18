import React from 'react';

function GreetingCard({ name }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
    width: '250px',
    margin: '10px auto',
    textAlign: 'center'
  };

  return (
    <div style={cardStyle}>
      <h2>Hello, {name}!</h2>
      <p>Welcome to React.</p>
    </div>
  );
}

export default GreetingCard;
