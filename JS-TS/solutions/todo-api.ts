import { InMemoryRepository } from './repository';
import { Todo, NewTodo } from './types';

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();

  async getAll(): Promise<Todo[]> {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return this.repo.findAll();
  }

  async add(newTodo: Partial<NewTodo>): Promise<Todo> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return this.repo.add(newTodo as Todo);
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return this.repo.update(id, update);
  }

  async remove(id: number): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return this.repo.remove(id);
  }
}
