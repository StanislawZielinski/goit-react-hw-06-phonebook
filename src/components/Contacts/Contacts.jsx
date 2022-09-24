import React from "react";
import { useSelector } from "react-redux";

// pamietaj filter w argumentach i parametrach

const Contacts = ({ renderContacts, contacts }) => {
        
        return (
            <div>
                <ul>{renderContacts(contacts)}</ul>
            </div>
    )}
export default Contacts