import React, {useEffect, useState} from "react";
import Todo from "./Todo";



function TodoWeek({todos, completeTodo, removeTodo, updateTodo}) {
    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

    const [dayTodo, setDayTodo] = useState({
        
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
        domingo: []
    })

    const validate =function() {
        todos.map((e) => {
            if(e.day == "Lunes"){

             setDayTodo({
                 ...dayTodo,
                 lunes: [...dayTodo.lunes, e] 
             })
            }
            if(e.day == "Martes"){
             setDayTodo({
                 ...dayTodo,
                 martes: [...dayTodo.martes, e] 
             })
            }
            if(e.day == "Miercoles"){
             setDayTodo({
                 ...dayTodo,
                 miercoles: [...dayTodo.miercoles, e] 
             })
            }
            if(e.day == "Jueves"){
             setDayTodo({
                 ...dayTodo,
                 jueves: [...dayTodo.jueves, e] 
             })
            }
            if(e.day == "Viernes"){
             setDayTodo({
                 ...dayTodo,
                 viernes: [...dayTodo.viernes, e] 
             })
            }
            if(e.day == "Sabado"){
             setDayTodo({
                 ...dayTodo,
                 sabado: [...dayTodo.sabado, e] 
             })
            }
            if(e.day == "Domingo"){
             setDayTodo({
                 ...dayTodo,
                 domingo: [...dayTodo.domingo, e] 
             })
            }
         }
            )
    }
    useEffect(()=>{
        validate()
    },[todos])
   

    return (<div>
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
            )
}
export default TodoWeek;
