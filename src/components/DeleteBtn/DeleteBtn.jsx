import React from "react";

const DeleteBtn = ({deleteContact, id}) => {
            return (
                <button className="button-contact" onClick={()=>deleteContact(id)}>delete</button>
            )
} 
export default DeleteBtn