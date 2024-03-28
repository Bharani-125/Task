import React, { useState, useEffect } from 'react';

// Functional component WebSocketSubscriber
const WebSocketSubscriber = () => {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    // Initialize WebSocket connection
    const socket = new WebSocket('wss://example.com/socket');

    // Function to handle messages received from WebSocket server
    const handleMessage = (event) => {
      setMessage(event.data);
    };

    // Subscribe to WebSocket events
    socket.addEventListener('message', handleMessage);

    // Cleanup function to unsubscribe from WebSocket events
    return () => {
      socket.removeEventListener('message', handleMessage);
      socket.close();
    };
  }, []); // Empty dependency array ensures effect runs only on component mount and unmount

  return (
    <div>
      <h2>WebSocket Subscriber</h2>
      <p>Last message received: {message}</p>
    </div>
  );
};

export default WebSocketSubscriber;
