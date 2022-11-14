import React, {useState, useEffect} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import TodoWeek from "./TodoWeek";


function TodoList() {
    const [todos, setTodos] = useState([])
    const [dayTodo, setDayTodo] = useState({
        
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
        domingo: []
    })

    useEffect(()=>{
        validate()
    },[todos])
    const addTodo = todo =>{
        console.log(todo)
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];
        console.log(newTodos)
        setTodos(newTodos)
        
    }

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)  ))

    }
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete

            }
            return todo
            
        })
        setTodos(updatedTodos)
    }


    
    const validate = () => {
        console.log(todos)
        return (todos.map((e) => {
            if(e.day == "Lunes"){ 
            setDayTodo({
                 ...dayTodo,
                 lunes: [...dayTodo.lunes, e] 
             })
            }
            else if(e.day == "Martes"){
             setDayTodo({
                 ...dayTodo,
                 martes: [...dayTodo.martes, e] 
             })
            }
            else if(e.day == "Miercoles"){
             setDayTodo({
                 ...dayTodo,
                 miercoles: [...dayTodo.miercoles, e] 
             })
            }
            else if(e.day == "Jueves"){
             setDayTodo({
                 ...dayTodo,
                 jueves: [...dayTodo.jueves, e] 
             })
            }
            else if(e.day == "Viernes"){
             setDayTodo({
                 ...dayTodo,
                 viernes: [...dayTodo.viernes, e] 
             })
            }
            else if(e.day == "Sabado"){
             setDayTodo({
                 ...dayTodo,
                 sabado: [...dayTodo.sabado, e] 
             })
            }
            else if(e.day == "Domingo"){
             setDayTodo({
                 ...dayTodo,
                 domingo: [...dayTodo.domingo, e] 
             })
            }
            
         }
            ))
    }
   


    return (
        <div>
            <h1>what's the plan for eat this week?</h1>
            <TodoForm onSubmit={addTodo} onValidate={validate}/>
            <div className="taksday">
                <div >
                    <h1 className="titulo-day">Lunes</h1>
                    <Todo todos={dayTodo.lunes} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                </div>
                <div >
                    <h1 className="titulo-day">Martes</h1>
                    <Todo todos={dayTodo.martes} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                </div>
                <div >
                    <h1 className="titulo-day">Miercoles</h1>
                    <Todo todos={dayTodo.miercoles} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                </div>
                <div >
                    <h1 className="titulo-day">Jueves</h1>
                    <Todo todos={dayTodo.jueves} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                </div>
                <div >
                    <h1 className="titulo-day">Viernes</h1>
                    <Todo todos={dayTodo.viernes} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                </div>
                <div >
                    <h1 className="titulo-day">Sabado</h1>
                    <Todo todos={dayTodo.sabado} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                </div>
                <div >
                    <h1 className="titulo-day">Domingo</h1>
                    <Todo todos={dayTodo.domingo} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                </div>

    </div>
        </div>
    )
}
export default TodoList;
