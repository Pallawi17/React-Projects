import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      < h1 > profile component </h1>
      <p>name: {props.name}</p>
      <p>count: {count}</p>
      <button onClick={()=> setCount(1)}>setCount</button>
    </div>
  )
}

export default Profile;