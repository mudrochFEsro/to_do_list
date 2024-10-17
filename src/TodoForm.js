import React, {useState} from "react";
import Paper from "@mui/material/Paper";
import {TextField} from "@mui/material";
import useInputState from "./hooks/useInputState"
import Button from "@mui/material/Button";


function TodoForm({addTodo}) {
    const [value, handleChange, reset] = useInputState("");
    const [error, setError] = useState(false);
    const handleError = () => {
        if (value === "" || value.length === 0) {
            setError(true);
            return true;
        } else {
            setError(false);
            return false;
        }
    }

    return (
        <>
            <Paper style={{margin: "1rem 0", padding: "1rem"}}>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    if (handleError()) return;
                    addTodo(value);
                    reset();
                }}>
                    <TextField
                        style={{marginBottom: "1rem", marginTop: "0"}}
                        value={value}
                        onChange={handleChange}
                        margin="normal"
                        label="Add new Todo"
                        error={error}
                        helperText={error && "Input is empty"}
                        fullWidth
                    />
                    <Button fullWidth variant="contained" type="submit" color="primary">add todo</Button>
                </form>

            </Paper>
        </>
    )
}

export default TodoForm