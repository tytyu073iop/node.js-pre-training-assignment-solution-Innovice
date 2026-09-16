import React, { useState } from "react";
import { Todo } from "../../types";
import { ToDoItem } from "../task-02/ToDoItem";

/**
 * Task 4: CompleteToDoList Component
 *
 * Theory: State Updates and Immutability
 *
 * React state updates must be immutable. This means you cannot directly modify the existing state
 * object or array. Instead, you must create a new object/array with the updated values.
 *
 * Why Immutability Matters:
 * 1. React uses reference equality to determine if state has changed
 * 2. Direct mutations don't trigger re-renders
 * 3. It enables time-travel debugging and undo/redo features
 * 4. It makes state changes predictable and traceable
 *
 * Common State Update Patterns:
 *
 * For Arrays:
 * - Adding: [...array, newItem]
 * - Removing: array.filter(item => item.id !== id)
 * - Updating: array.map(item => item.id === id ? {...item, updated: true} : item)
 *
 * For Objects:
 * - Updating: {...object, newProperty: value}
 * - Nested updates: {...object, nested: {...object.nested, updated: true}}
 *
 * Event Handling with Parameters:
 * - Use arrow functions to pass parameters to event handlers
 * - Example: onClick={() => handleClick(id)}
 * - Or use bind: onClick={handleClick.bind(null, id)}
 *
 * Key Concepts:
 * - Always create new objects/arrays when updating state
 * - Use spread operator (...) for shallow copies
 * - Consider using libraries like Immer for complex updates
 * - Think about state structure before implementing
 */
export const CompleteToDoList: React.FC = () => {
  // TODO: Implement the CompleteToDoList component
  //
  // Requirements:
  // 1. Display a list of todos with add functionality
  // 2. Add a "Complete" button for each todo
  // 3. When clicked, mark the todo as completed
  // 4. Use immutable state updates
  // 5. Show completion status for each todo
  //
  // Example state structure:
  // const [todos, setTodos] = useState<Todo[]>([]);
  //
  // Example update function:
  // const markCompleted = (id: number) => {
  //   setTodos(todos.map(todo =>
  //     todo.id === id ? {...todo, completed: true} : todo
  //   ));
  // };
  //
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");

  let [counter, setCounter] = useState<number>(0);

  function addTodo(title: string) {
    let todo: Todo = { id: counter, title, completed: false };
    setCounter((previousCount) => previousCount + 1);
    setTodos((pre) => [...pre, todo]);
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (title === "") {
      return;
    }

    addTodo(title);

    setTitle("");
  }

  function onToggleTodo(id: number): void {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <div>
      {/* TODO: Replace this with your implementation */}
      <h4>Complete ToDo List Component</h4>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Todo:
            <input type="text" value={title} onChange={handleInput} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        <h3>Todo List</h3>
        {/*TODO: refactor*/}
        {todos.length === 0 ? (
          <p>Your list is empty. Add a new task!</p>
        ) : (
          <ol>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "8px",
                  justifyContent: "center",
                }}
              >
                <ToDoItem todo={todo}></ToDoItem>{" "}
                <button onClick={() => onToggleTodo(todo.id)}>
                  {todo.completed ? "Complete" : "Incomplete"}
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};
