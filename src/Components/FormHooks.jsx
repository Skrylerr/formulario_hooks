import React from "react";

const FormHooks = props => {

    const {datos, setDatos} = props;

    const mostrarUsuario = e => {
        setDatos ({
            ...datos, [e.target.name]: e.target.value
        });
    };

    return (
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" name='firstName' onChange={mostrarUsuario}></input>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={mostrarUsuario}></input>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="email" onChange={mostrarUsuario}></input>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange={mostrarUsuario}></input>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={mostrarUsuario}></input>
            </div>
        </form>
    )
}

export default FormHooks;