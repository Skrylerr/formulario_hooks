import React from "react";

const Resultado = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props.data;
    return (
        <div>
            <h3>Yor Form Data</h3>
            <p>First Name: {firstName} </p>
            <p>Last Name: {lastName} </p>
            <p>Email: {email} </p>
            <p>Paswword: {password} </p>
            <p>Confirm Password: {confirmPassword} </p>
        </div>
    );
};

export default Resultado;