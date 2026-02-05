import { Todo } from './types';

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  let arr: Todo[] = JSON.parse(JSON.stringify(state));
  arr.push(todo);
  return arr;
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
  let arr: Todo[] = JSON.parse(JSON.stringify(state));
  let req = arr.find((t) => t.id == id);
  if (req == null) {
    throw new Error("Cannot find todo with id");
  }

  if (update.title != null) {
    req.title = update.title;
  }
  if (update.status != null) {
    req.status = update.status;
  }
  if (update.description != null) {
    req.description = update.description;
  }
  return arr;
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  if (state.find((t) => t.id == id) == null) {
    throw new Error("Cannot find todo with id");
  }
  let arr = state.filter((t) => t.id != id);

  return arr; 
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  return state.find((t) => t.id == id);
}
