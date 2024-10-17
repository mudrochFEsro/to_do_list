import React from "react";
import Paper from "@mui/material/Paper";
import {TextField} from "@mui/material";
import useInputState from "./hooks/useInputState"
import Button from "@mui/material/Button";

function TodoForm({addTodo}) {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper style={{margin: "1rem 0", padding: "1rem"}}>
            <form onSubmit={(event) => {
                event.preventDefault()
                addTodo(value)
                reset();
            }}>
                <TextField
                    style={{marginBottom: "1rem", marginTop: "0"}}
                    value={value}
                    onChange={handleChange}
                    margin="normal"
                    label="Add new Todo"
                    fullWidth
                />
                <Button fullWidth variant="contained" type="submit" color="primary">add todo</Button>
            </form>
        </Paper>
    )
}

export default TodoForm