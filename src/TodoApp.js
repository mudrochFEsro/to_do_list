import React, {useEffect} from "react";
import useTodoState from "./hooks/useTodoState";
import TodoList from "./TotoList";
import TodoForm from "./TodoForm";
import {Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#444444', // Nastaviť primárnu farbu na oranžovú
        },
    },
});
function TodoApp() {


    const initialTodos = []
    const {todos, addTodo, removeTodo, editTodo, toggleTodo} = useTodoState(initialTodos)

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    return (
        <ThemeProvider theme={theme}>
        <Paper style={{
            padding: "0",
            margin: "0",
            height: "100vh",
            background: "#e7e7e7",
        }} elevation={0}>
            <AppBar color='primary' position='static' style={{height: "fit-content"}}>
                <Toolbar>
                    <Typography color="inherit">Todos</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center">
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
        </ThemeProvider>
    )
}

export default TodoApp;