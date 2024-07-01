import './App.css';
import {useState} from 'react';

function App() {

  function currentCount() {
    console.log("count");
    return 5;
  }
  // const [count, setCount] = useState(currentCount());
  // const [count, setCount] = useState(currentCount);
  const [count, setCount] = useState(() => {
    console.log("count");
    return 5;
  });
  // const [count, setCount] = useState(() => currentCount());
  const [theme, setTheme] = useState('blue');

  function decs(){
    // setCount(count-1);
    setCount(prevCount => prevCount -1);
    setTheme('red');
  }

  function inc(){
    // setCount(count+1);
    setCount(prevCount => prevCount +1)
    setTheme('green');

  }
  return (
    <div>
      <button onClick={decs}>-</button>
      <span style={{backgroundColor: theme}}>{count}</span>
      <button onClick={inc}>+</button>
    </div>
  );
}

export default App;
