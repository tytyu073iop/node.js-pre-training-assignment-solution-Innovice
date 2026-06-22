import { Todo, NewTodo, TodoStatus } from './types';

let nextId = 1;

export function createTodo(todo: NewTodo): Todo {
  let copy: Todo = { 
    title: todo.title,
    description: todo.description ?? '',
    status: todo.status ?? TodoStatus.PENDING,
    id: nextId++,
    createdAt: new Date()
  };
  return copy;
}
