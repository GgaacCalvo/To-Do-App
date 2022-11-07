import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")
    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    const inputRef = useRef(null)
    const [inputDay, setInputDay] = useState("")
    useEffect(() =>{
        inputRef.current.focus() // hace que ya te posicione en el input
    })

    const handleChange = (e) => {
        
        setInput(e.target.value)
    }
    const checkboxPick = (e) => {
            if(e.target.checked){
            setInputDay(e.target.value)
        }}
    const handleSubmit = (e) => {
        e.preventDefault()

         props.onSubmit({
             id: Math.floor(Math.random() * 10000),
             text: input,
             day: inputDay
         })
        setInput('')
        setInputDay('')
    }

    


    return (
        <form className="todo-form" onSubmit={handleSubmit}> 
        {props.edit ? (
        <>
        <input type="text" placeholder="update your Item" value={input} name="text" className="todo-input edit" onChange={handleChange} ref={inputRef}/>
            <button className="todo-button edit">Update</button></>) : (
            <>
            
            <input type="text" placeholder="add a todo" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef}/>
            <button className="todo-button">Add todo</button> 
            {days.map((e, index) => 
                <label><input type="checkbox" key={index} value={e} onClick={checkboxPick}/>{e}</label>
            ) }
            </>)}
            
        </form>
    )
}
export default TodoForm;