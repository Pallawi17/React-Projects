import {React, useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditContact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const location = useLocation();
  const [id, setId] = useState('');
  const navigate = useNavigate();
   
   useEffect(() => {
     if (location.state && location.state.contact) {
       setName(location.state.contact.name);
       setEmail(location.state.contact.email);
       setId(location.state.contact.id);
     
     }
   }, [location.state]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
   
  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("all the fields are mandatory");
      return;
    } else {
      const contact = {id: id, name: name, email: email}
      props.updateContactHandler(contact);
      navigate("/");
    }
    setName("");
    setEmail("");
   }
  return(
     <div className="flex flex-col m-2">
         <h2 className="text-purple-400 text-lg">Edit contact</h2>
         <form onSubmit={update}>
           < div>
             <label className="pr-5 mr-5">Name:</label>
             <input type="text" name="name" placeholder="Name" 
             className="focus:outline-none focus:ring-2 focus:ring-purple-400 m-2" 
             value = {
               name
             }
             onChange = {
              handleNameChange
             }
             />
           </div>
           < div>
             <label className="pr-5 mr-5">Email:</label>
             < input type = "text"
             name = "email"
             placeholder = "Email"
             className = "focus:outline-none focus:ring-2 focus:ring-purple-400 m-2" 
            value = {
              email
            }
            onChange = {
             handleEmailChange
            }
             />
           </div>
           <button className="bg-purple-400 hover:bg-purple-500 rounded-md p-1 mt-4">Update</button>
         </form>
       </div>
  );
}

export default EditContact;
