import React, {useState} from "react";
import {TextField} from "@mui/material";
import useInputState from '../src/hooks/useInputState'
import Button from '@mui/material/Button';


function EditTodoForm({editTodo, id, task, toggleEditForm}) {
    const [value, handleChange, reset] = useInputState(task)
    const [error, setError] = useState(false);
    const handleError = () => {
        if (value.trim() === "" || value.length === 0) {
            setError(true);
            return true;
        } else {
            setError(false);
            return false;
        }
    };
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                if (handleError()) return;
                editTodo(id, value);
                toggleEditForm();
                reset();

            }} style={{width: "100%"}}>
            <TextField
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
                style={{marginBottom: "1rem"}}
                error={error}
                helperText={error && "Input is empty"}
            />
            <Button fullWidth variant="contained" type="submit" color="primary">Update Todo</Button>
        </form>
    )

}

export default EditTodoForm;