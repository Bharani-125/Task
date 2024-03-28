import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (!inputValue) return;

    // Optimistically update UI by adding the new item
    const newItem = { id: Date.now(), text: inputValue };
    setItems([...items, newItem]);

    // Clear input field
    setInputValue('');

    // Send request to server to add item
    fetch('/api/addItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    .then(response => {
      if (!response.ok) {
        // If server request fails, revert UI changes
        setItems(prevItems => prevItems.filter(item => item.id !== newItem.id));
        throw new Error('Server request failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error (e.g., display error message to user)
    });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Optimistic UI Example</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
