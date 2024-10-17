import React from "react";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {ListItemSecondaryAction, Typography} from "@mui/material";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

function Todo({id, task, completed, removeTodo, toggleTodo, editTodo}) {
    const [isEditing, toggle] = useToggleState();
    return (
        <ListItem
            style={{
                height: "fit-content",
                padding: isEditing ? "1rem" : "1rem 7rem 1rem 1rem", // Správny ternárny operátor
                display: 'flex',
                alignItems: 'center'
            }}>
            {isEditing ? (
                <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/>
            ) : (
                <>
                    <Checkbox
                        disableRipple
                        disableTouchRipple
                        tabIndex={-1}
                        style={{padding: "0 0.5rem 0 0"}}
                        checked={completed}
                        onClick={() => toggleTodo(id)}
                    />
                    <Typography
                        style={{
                            textDecoration: completed ? "line-through" : "none",
                            flex: 1,
                            wordWrap: 'break-word',
                            width: '100%',
                            maxWidth: "600px",
                        }}
                    >
                        {task}
                    </Typography>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <EditIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

export default Todo;
