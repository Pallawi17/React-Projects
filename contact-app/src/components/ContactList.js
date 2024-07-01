import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputEl = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  }
  const renderContactList = props.contacts.map((contact) => {
    return(
      < ContactCard contact = {
        contact
      }
      clickHandler = {
        deleteContactHandler
      }
      key = {
        contact.id
      }
      / >
    );
  });

     
  const getsearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  }
  return(
    <div>
      <div className="flex justify-between m-2">
      <div className="text-purple-400 text-lg">Contact list</div>
       <Link to="/add">
          <button className="bg-purple-400 hover:bg-purple-500 rounded-md p-1">Add contact</button>
      </Link>
     
      </div>
       < div className = "w-full h-8 border flex justify-between" >
          < input ref = {
            inputEl
          }
          type = "text"
          placeholder = "Search Contacts"
          className = "flex flex-1 focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 p-2"
          value = {
            props.term
          }
          onChange = {
            getsearchTerm
          }
          />
          <i className="fa-solid fa-magnifying-glass p-2"></i>
      </div>
      <div className="mt-4">{renderContactList.length >0 ? renderContactList : "No contacts available !!"}</div>
    </div>
  );
}

export default ContactList;