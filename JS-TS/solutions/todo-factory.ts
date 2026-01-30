import { Todo, NewTodo, TodoStatus } from './types';

let nextId = 1;

export function createTodo(input: Partial<NewTodo>): Todo {
  let copy: Todo = { 
    title: input.title || '',
    description: input.description || '',
    status: TodoStatus.PENDING,
    id: nextId++,
    createdAt: new Date()
  };
  return copy;
}
