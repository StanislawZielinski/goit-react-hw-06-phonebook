import React from "react";
import PropTypes from "prop-types";

const Contacts = ({ renderContacts, filter, contacts }) => {
        
        return (
            <div>
                <ul>{renderContacts(filter, contacts)}</ul>
            </div>
    )}
export default Contacts

Contacts.propTypes = {
    renderContacts: PropTypes.func.isRequired,
    filter: PropTypes.string,
    contacts: PropTypes.array,
}