import React from "react";

const Filter = ({onChange}) => {

        return (
            <div>
                <p className="title">Contacts</p>
                <p className="filter-title">filter contacts by name</p>
                <input className="input" onChange={onChange} />
            </div>
    )}

export default Filter