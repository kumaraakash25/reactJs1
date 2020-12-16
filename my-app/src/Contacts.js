import React from 'react'

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
      {contacts.map((contact) => (
        <div key = {contact.id}>
            {contact.name}
            {contact.email}
            <p>{contact.company.catchPhrase}</p>
        </div>
      ))}
    </div>
  )
};

export default Contacts;