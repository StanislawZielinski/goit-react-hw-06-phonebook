import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import "./Phonebook.css"
import Form from "components/Form/Form";
import DeleteBtn from "components/DeleteBtn/DeleteBtn"
import Filter from "components/Filter/Filter"
import Contacts from "components/Contacts/Contacts";

const Phonebook = () => {
        const defaultContacts =
        [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
    const zeroContacts = [];
    const [contacts, setContacts] = useState(() => {
        if (JSON.parse(localStorage.getItem("newState"))===zeroContacts) {
            return defaultContacts
        }
        return JSON.parse(localStorage.getItem("newState"))
    }); 
    const [filter, setFilter] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.name.value;
        const phoneNumber = form.elements.number.value;
        for (const contact of contacts) {
            if (contact.name.includes(name)) {
                alert(`${name} is already in contacts`)
                form.reset();
                return
            }  
        };
        setContacts([...contacts, { name: name, id: nanoid(), number: phoneNumber }]);
        form.reset();
    }

        useEffect(() => {
            localStorage.setItem("newState", JSON.stringify(contacts));
        }, [contacts]);
    
    const deleteContact = (id) => {
        const newContactList = contacts.filter((contact) =>
            contact.id !== (id));
        setContacts(newContactList);
    };
    
    const renderContacts = (filterValue, contacts) => {
        if (!filterValue) {
            return contacts.map(contact => {
                return <li className="contacts" key={contact.id}>{contact.name}: {contact.number}
                    <DeleteBtn deleteContact={deleteContact} id={contact.id} />
                </li>
            })
        };

        const filterFunction = contacts.filter((el) => el.name.toLowerCase().includes(filterValue.toLowerCase()));
            return (
            filterFunction.map(contact =>
            {
                return <li className="contacts" key={contact.id}>{contact.name}: {contact.number}
                    <DeleteBtn deleteContact={deleteContact} id={contact.id} />
                </li>
            })
        )
    }
    const onChange = (evt) => setFilter( evt.target.value);
        return (
            <div className="wrapper">
                <Form handleSubmit={handleSubmit} />
                <div className="contacts-wrapper">
                    <Filter onChange={onChange} />
                    <Contacts renderContacts={renderContacts}
                    filter={filter} contacts={contacts} />
                </div>
            </div>
    )
}
export default Phonebook