import { createContext, useContext, useState } from "react";
import api from '../api/contacts';

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider({children}){
  const [contacts, setContects] = useState([]);
   // Retrive contacts from api
   const retriveContacts = async () => {
     const response = await api.get("/contacts");
     console.log(response.data);
     if(response.data) setContects(response.data);
   }
  const value = {
    contacts,
    retriveContacts,
  }

  return <contactsCrudContext.Provider value= {value}>
    {children}
  </contactsCrudContext.Provider>
}

export function useContactsCrud() {
  return useContext(contactsCrudContext);
}