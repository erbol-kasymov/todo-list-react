import React, {useState} from 'react';
import './todo.css'

export const TodoItem = ({todo, remove, completeTodo, id}) => {

    return(
        <div className='list' style={todo.complete ? noready : ready}>
            {todo.text}
            <>
                <button className='Bekjan' onClick={() => completeTodo(id)} >complete</button>
                <button className='Aktilek' onClick={()=> remove(id)}>delete</button>
            </>
        </div>
    )
}

const ready = {
    textDecoration: "line-through"
}
const noready = {
    textDecoration: "none"
}