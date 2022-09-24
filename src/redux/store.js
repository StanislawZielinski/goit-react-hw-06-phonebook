import { configureStore, createReducer, current } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "../redux/actions";
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";

const defaultContacts =
    [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

    // const localStorageContacts = (JSON.parse(localStorage.getItem("newState")))===null ? (defaultContacts) : 
    // (JSON.parse(localStorage.getItem("newState")))


        // useEffect(() => {
        //     localStorage.setItem("newState", JSON.stringify(contacts));
        // }, [contacts]);

const INIT_STATE = defaultContacts;

// setContacts([...contacts, { name: name, id: nanoid(), number: phoneNumber }]);

const contacts = createReducer(INIT_STATE, {
    [addContact]: (state, action) => (console.log(current(state)), [...state, action.payload]),
    [deleteContact]: (state, action) => (console.log(current(state)), [...action.payload]),
}); 

   
const store = configureStore({
    reducer: {
        contacts,
    },
});



export default store;