import React from "react";
import {TextField} from "@mui/material";
import useInputState from '../src/hooks/useInputState'
import Button from '@mui/material/Button';


function EditTodoForm({editTodo, id, task, toggleEditForm}) {
    const [value, handleChange, reset] = useInputState(task)

    return (
        <form
            onSubmit={(e) => {
            e.preventDefault()
            editTodo(id, value)
            reset();
            toggleEditForm()
        }} style={{ width: "100%"}}>
            <TextField
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
                style={{marginBottom: "1rem"}}
            />
            <Button fullWidth variant="contained" type="submit" color="primary">Update Todo</Button>
        </form>
    )

}

export default EditTodoForm;