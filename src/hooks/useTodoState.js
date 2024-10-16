import { v4 } from "uuid";
import useLocalStorageState from "./useLocalstorageState";

const useTodoState = (initialTodos) => {
    const [todos, setTodos] = useLocalStorageState("todos",initialTodos);
    return {
        todos,
        addTodo: (newTodoText) => {
            setTodos([
                ...todos,
                {
                    id: v4(),
                    task: newTodoText,
                    completed: false,
                },
            ]);
        },
        removeTodo: (todoId) => {
            const updatedTodos = todos.filter((todo) => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        toggleTodo: (todoId) => {
            const updatedTodos = todos.map((todo) =>
                todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map((todo) =>
                todo.id === todoId ? { ...todo, task: newTask } : todo
            );
            setTodos(updatedTodos);
        },
    };
};

export default useTodoState;
