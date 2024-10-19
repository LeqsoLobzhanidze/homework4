import './App.css'
import React, { useState } from 'react'; 
import Card from './components/Card/Card'

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [darkMode, setDarkMode] = useState(false); 
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState('');

  const quotes = [
    "The best way to predict the future is to create it.",
    "You are never too old to set another goal or to dream a new dream.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it."
  ];

  const addTask = (e) => {
    e.preventDefault(); 
    if (task.trim()) {
      setTaskList([...taskList, task]); 
      setTask('');
    }
  };

  const deleteTask = (indexToRemove) => {
    setTaskList(taskList.filter((_, index) => index !== indexToRemove));
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{
      backgroundColor: darkMode ? 'black' : 'white',
      color: darkMode ? 'white' : 'black',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }} className="todo-container">

      <Card title={'ProductCard'}
            img={'/assets/funny.webp'}
            price={'No Price Detected'}
            desc={'No Desc'}
      />

      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>

      <button className='ToggleButton'
              onClick={toggleTheme} 
              style={{
                padding: '5px 10px',
                backgroundColor: darkMode ? 'white' : 'black',
                color: darkMode ? 'black' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '15px',
                backgroundColor: 'bisque',
                marginBottom: '5px',
                width: '75px',
                marginRight: '-22.5px'
              }}
      >toggle</button>

      <form onSubmit={addTask}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)} 
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {taskList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h2>Random Quote:</h2>
      <p>{quote}</p>
      <button onClick={generateQuote}>Get Random Quote</button>
    </div>
  );
}

export default App;
