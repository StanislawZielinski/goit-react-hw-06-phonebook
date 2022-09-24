import React from "react";

// pamietaj filter w argumentach i parametrach

const Contacts = ({ renderContacts, filter, contacts }) => {
        
        return (
            <div>
                <ul>{renderContacts(filter, contacts)}</ul>
            </div>
    )}
export default Contacts