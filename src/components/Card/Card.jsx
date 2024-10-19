import React, { useState } from 'react';
import './Card.css';

export default function Card({ title, img, desc = 'no desc' }) {
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const toggleTitleVisibility = () => {
    setIsTitleVisible(!isTitleVisible); 
  };

  return (
    <div className='card'>
      {isTitleVisible && <h1>Title: {title}</h1>}
      <img src={img} alt="" width={100} />
      <h2>Description: {desc}</h2>


      <button onClick={toggleTitleVisibility} style={{
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px',
        }}>
        {isTitleVisible ? 'Hide Title' : 'Show Title'}
      </button>
    </div>
  );
}