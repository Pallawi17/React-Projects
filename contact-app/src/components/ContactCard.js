import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const {id, name, email} = props.contact
  return(
     < div className = "flex justify-between border border-gray-300" >
       <div className="flex justify-start">
        < i className = "fa-solid fa-user p-2 text-purple-400"> </i>
          <div className="flex flex-col p-2 ">
            < Link to = {`/contact/${id}`}
            state = {
              {
                contact: props.contact
              }
            } >
          <div className="">
            {name}
          </div>
          <div className="">
            {email}
          </div>
          </Link>
          </div>
        </div>
        <div className="flex flex-row-reverse p-2">
        <i className = "fa-solid fa-trash flex justify-end p-2" style={{color: "red"}}
          onClick={() => props.clickHandler(id)}
        > </i>
        < Link to = {
          `/edit`
        }
        state = {
          {
            contact: props.contact
          }
        } >
        < i className = "fa-solid fa-pen-to-square flex justify-end p-2 text-purple-400"
        > </i>
        </Link>
        </div>
      </div>
  );
}

export default ContactCard;