import React from "react";

const Contacts = ({renderContacts, filter, contacts}) => {

        return (
            <div>
                <ul>{renderContacts(filter, contacts)}</ul>
            </div>
    )}
export default Contacts