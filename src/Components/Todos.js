import React from "react"
import TodoItem from "./TodoItem"

export default function Todos(props){

    let myStyle ={
        minHeight:"70vh",
        margin:"80px auto"
    }
    return (
        <div className="container my-3" style={myStyle}>
        <h3 className="text-center my-3">Todos-List</h3>

        { props.todos.length === 0 ? <h4>Good Job you completed your work</h4> : 
         props.todos.map((todo)=> {
            return (
            <>
            <TodoItem todo={todo} key={todo.sno} onDelete ={props.onDelete}/>
            <hr/>
            </>
        )
        }
        )}
        
        </div>
    )
}