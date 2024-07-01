import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
const AddContact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

     const handleNameChange = (event) => {
       setName(event.target.value);
     };

     const handleEmailChange = (event) => {
       setEmail(event.target.value);
     };

   const add = (e) => {

      e.preventDefault();
      console.log(`Name: ${name}, email: ${email}`);

      if (name === "" || email === "") {
        alert("all the fields are mandatory");
        return;
      } else {
        const contact = {name: name, email: email}
        props.addContactHandler(contact);
        navigate("/");
      }
      setName("");
      setEmail("");
   }
  return(
     <div className="flex flex-col m-2">
         <h2 className="text-purple-400 text-lg">Add contact</h2>
         <form onSubmit={add}>
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
           <button className="bg-purple-400 hover:bg-purple-500 rounded-md p-1 mt-4">Add</button>
         </form>
       </div>
  );
}

export default AddContact;
