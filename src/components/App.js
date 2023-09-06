import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

// Components - Functional and Class Component
function App() {

  const contacts = [
    {
      id: '1',
      name: 'Samia',
      email: 'samia@gmail.com',
    },
    {
      id: '2',
      name: 'Shorna',
      email: 'shorna@gmail.com',
    },
  ]

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
