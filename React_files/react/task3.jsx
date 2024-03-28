import React, { useState } from 'react';

// Functional component Greetings
const Greetings = () => {
  // Define state variable 'isLoggedIn' and its setter function 'setIsLoggedIn'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle the isLoggedIn state
  const toggleLoginStatus = () => {
    setIsLoggedIn(prevStatus => !prevStatus);
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back! You are logged in.</h2>
      ) : (
        <h2>Hello! Please log in.</h2>
      )}
      <button onClick={toggleLoginStatus}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  );
};

export default Greetings;
