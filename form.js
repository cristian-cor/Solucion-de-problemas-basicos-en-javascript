import React, { useState } from 'react'

const Form = () => {

    const [form, setForm] = useState({
        nombre: '', apellido: '', barrio: ''
    });
    const [datos, setDatos] = useState([]);

    const handleChangue = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        }
        )
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setDatos([
            ...datos,
            form
        ])
        console.log(form)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="nombre" onChange={handleChangue} />
            </div>
            <div>
                <input type="text" name="apellido" onChange={handleChangue} />
            </div>
            <div>
                <input type="text" name="barrio" onChange={handleChangue} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form