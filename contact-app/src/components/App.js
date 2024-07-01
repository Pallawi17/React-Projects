import { React, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {
  v4 as uuidv4
} from 'uuid';
import './App.css';
import api from '../api/contacts';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './contactDetails';
import EditContact from './EditContact ';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContects] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResult] = useState([]);
  
  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts", request);
    setContects([...contacts, response.data]);
  }
  
  const updateContactHandler = async (id) => {
    const response = await api.put(`/contacts/${id}`,"");
    setContects(contacts.map((contact) => {
      return contact.id === id ? {...response.data} :"";
    }));
  }
  // Retrive contacts from api
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter(contact => {
      return contact.id !== id;
    })
    setContects(newContactList);
  }
  
  const searchHandler = (SearchTerm) => {
    setSearchTerm(SearchTerm);
    if(SearchTerm !== ""){
      const newContactList = contacts.filter(contact => {
       return Object.values(contact).join(" ").toLowerCase().includes(SearchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    }else{
      setSearchResult(contacts);
    }
  }

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retriveContacts) setContects(retriveContacts);

    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if(allContacts) setContects(allContacts);
    }
    getAllContacts();
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <div className="border border-purple-500 w-96"> 
    <Router>
      <Header />
      <Routes>
        < Route path = "/"
          exact
          element={<ContactList
          contacts = {SearchTerm.length < 1 ?
                  contacts : searchResults
                }
                getContactId = {
                  removeContactHandler
                }
              term = {
                SearchTerm
              }
              searchKeyword = {searchHandler}
          />}/>
        <Route path="/add" 
          element = {
              < AddContact addContactHandler = {
                      addContactHandler
                  }/>}/>
        <Route path="/edit" 
          element = {
              < EditContact updateContactHandler = {
                      updateContactHandler
                  }
                  contacts= {contacts}
                 />}/>
        <Route path="/contact/:id" element={<ContactDetails />}/>
      </Routes>
    </Router>
      </div>
  );
}

export default App;
