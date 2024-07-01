import { React } from "react";
import {
  Link,
  useLocation
} from 'react-router-dom';

const ContactDetails = () =>{
  const location = useLocation();
  const {name, email} = location.state.contact || {};
  
  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
      <Link to="/">
        <button>Back to contact list</button>
      </Link>
    </div>
  )
}

export default ContactDetails;
