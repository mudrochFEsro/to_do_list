import React from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Todo from "./Todo";
import Divider from "@mui/material/Divider";

function TotoList({todos, removeTodo, toggleTodo, editTodo}) {
    if (todos.length)
    return (
        <Paper>
            <List style={{paddingBottom: "0",paddingTop: "0" }}>
                {todos.map((todo, index) => (
                    <React.Fragment key={todo.id}>
                    <Todo
                        id={todo.id}
                        task={todo.task}
                        key={todo.id}
                        completed={todo.completed}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                    {index < todos.length -1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    )
}

export default TotoList;