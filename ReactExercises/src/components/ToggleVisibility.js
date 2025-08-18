import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={toggle}>
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>
      {isVisible && <p>This is some sample content!</p>}
    </div>
  );
}

export default ToggleVisibility;
