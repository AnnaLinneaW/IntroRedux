import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/todoSlice";
export const ToDoList = () => {


    const dispatch = useDispatch();
    const todos = useSelector((state) => state.toDo.todos);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    
    return (
        <>
        <div>
            <h1>ToDoList</h1>
            <input
                type="text"
                placeholder="Enter your todo"
                id='titleValue'
            />
            <br />
            <input type="text" 
            placeholder='Description'       
            id='descriptionValue'
            />
            <br />
            <button
                onClick={() => {
                    dispatch(addTodo({
                        title: document.getElementById("titleValue").value,
                        description: document.getElementById("descriptionValue").value,
                    }));
                    setTitle("");
                }}
            >
                Add Todo
            </button>
            <br />
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                   <input type="text"
                        placeholder='Edit Todo Title'
                        id= {`editTitleValue${index}`}
                        />
                        <br />  
                    <input type="text"
                        placeholder='Edit Todo Description'
                        id={`editDescriptionValue${index}`}
                    />
                        <br />
                    <br />
                    <button
                        onClick={() => {
                            dispatch(editTodo({
                                index: index,
                                title: document.getElementById(`editTitleValue${index}`).value,
                                description: document.getElementById(`editDescriptionValue${index}`).value,
                            }));
                            setTitle("");
                            setDescription("");
                            }}
                    >
                        Edit
                    </button>
                    <br />
                        <br />
                        <button
                            onClick={() => {
                                dispatch(deleteTodo(
                                    index));
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>      
        </div>
        </>
    )

}

