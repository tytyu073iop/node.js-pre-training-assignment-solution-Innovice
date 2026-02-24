import { Todo, TodoStatus } from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  let arr: Todo[] = structuredClone(state);
  return arr.map((todo) => {
    todo.status = completed ? TodoStatus.COMPLETED : TodoStatus.PENDING; 
    return todo;
  });
}

export function clearCompleted(state: Todo[]): Todo[] {
  return state.filter((todo) => todo.status !== TodoStatus.COMPLETED);
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  let sum = 0;
  return state.reduce((num, todo) => {
    if (todo.status === status) {
      return num + 1;
    }
    return num;
  }, sum);
}
