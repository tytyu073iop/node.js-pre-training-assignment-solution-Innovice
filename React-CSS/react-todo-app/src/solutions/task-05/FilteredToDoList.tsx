import React, { useState } from 'react';
import { Todo } from '../../types';
import { AddToDo } from '../task-03/AddToDo';
import { ToDoItem } from '../task-02/ToDoItem';



/**
 * Task 5: FilteredToDoList Component
 * 
 * Theory: Derived State and Computed Values
 * 
 * In React, you often need to compute values based on your state. These are called "derived state"
 * or "computed values" and should be calculated during render rather than stored in state.
 * 
 * Why Use Derived State:
 * 1. Avoids state synchronization issues
 * 2. Reduces complexity by having a single source of truth
 * 3. Automatically updates when source data changes
 * 4. Prevents stale state bugs
 * 
 * Common Derived State Patterns:
 * 
 * Filtering:
 * - const activeTodos = todos.filter(todo => !todo.completed)
 * - const completedTodos = todos.filter(todo => todo.completed)
 * 
 * Searching:
 * - const filteredTodos = todos.filter(todo => 
 *     todo.title.toLowerCase().includes(searchTerm.toLowerCase())
 *   )
 * 
 * Sorting:
 * - const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title))
 * 
 * Aggregations:
 * - const completedCount = todos.filter(todo => todo.completed).length
 * - const totalCount = todos.length
 * 
 * Multiple Filters:
 * - Use multiple filter conditions or combine them
 * - Consider using useMemo for expensive computations
 * 
 * Key Concepts:
 * - Calculate derived values during render
 * - Don't store computed values in state
 * - Use useMemo for expensive calculations
 * - Keep state minimal and derive the rest
 */
export const FilteredToDoList: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  function handleAdd(title: string) {
    setTodos((prev) => [
      ...prev,
      { id: prev.length + 1, title, completed: false },
    ]);
  }

  function handleToggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // TODO: Implement the FilteredToDoList component
  // 
  // Requirements:
  // 1. Display a list of todos with add functionality
  // 2. Add filter buttons: "All", "Active", "Completed"
  // 3. Filter todos based on selected filter
  // 4. Use derived state for filtered results
  // 5. Add complete functionality for todos
  // 
  // Example implementation:
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  // 
  // const filteredTodos = todos.filter(todo => {
  //   if (filter === 'active') return !todo.completed;
  //   if (filter === 'completed') return todo.completed;
  //   return true; // 'all' case
  // });

  return (
    <div>
      {/* TODO: Replace this with your implementation */}
      <h4>Filtered ToDo List Component</h4>
      <p>Implement derived state and filtering here</p>
      <div>
        <form>
          <input type="radio" id="all" name="filter" value="all" checked={filter === 'all'} onChange={() => setFilter('all')} />
          <label htmlFor="all">All</label>
          <input type="radio" id="active" name="filter" value="active" checked={filter === 'active'} onChange={() => setFilter('active')} />
          <label htmlFor="active">Active</label>
          <input type="radio" id="completed" name="filter" value="completed" checked={filter === 'completed'} onChange={() => setFilter('completed')} />
          <label htmlFor="completed">Completed</label>
        </form>
      </div>
      <div>
        <AddToDo onAdd={handleAdd} />
        <h3>Todo List</h3>
        {todos.length === 0 ? (
          <p>Your list is empty.</p>
        ) : (
          <ol>
            {filteredTodos.map((todo) => (
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
                <button onClick={() => handleToggleTodo(todo.id)}>
                  {todo.completed ? "Completed" : "Complete"}
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}; 