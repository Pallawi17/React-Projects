import './App.css';
import {useState, useEffect} from 'react';

function App() {
const [resourceType, setResourceType] = useState('posts');
const [items, setItems] = useState([]);

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json));
  return () => {
    console.log("remove");
  }
}, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  );


// const [windowWith, setWindowWith] = useState(window.innerWidth);

// const handleResize = () => {
//   setWindowWith(window.innerWidth);
// }

// useEffect(()=>{
//   window.addEventListener('resize', handleResize);
// }, []);

// return (
//   <div>{windowWith}</div>
// );
}

export default App;
