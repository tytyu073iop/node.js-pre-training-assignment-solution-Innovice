import { TodoApi } from './todo-api';
import { Todo, TodoStatus } from './types';

export class TodoService {
  constructor(private readonly api: TodoApi) { }

  async create(title: string, description = ''): Promise<Todo> {
    return this.api.add({title : title, description : description});
  }

  async toggleStatus(id: number): Promise<Todo> {
    const item = (await this.api.getAll()).find((val) => val.id === id);
    if (item == null) {
      throw Error("No item");
    }

    switch (item.status) {
      case TodoStatus.COMPLETED:
        await this.api.update(id, {status : TodoStatus.PENDING});
        break;

      case TodoStatus.IN_PROGRESS:
        await this.api.update(id, {status : TodoStatus.COMPLETED});
        break;

      case TodoStatus.PENDING:
        await this.api.update(id, {status : TodoStatus.IN_PROGRESS});
        break;

      default:
        await this.api.update(id, {status : TodoStatus.PENDING});
        break;
    }

    return (await this.api.getAll()).find((val) => val.id === id)!;
  }

  async search(keyword: string): Promise<Todo[]> {
    return (await this.api.getAll()).filter((val) => 
      val.description.toLowerCase().includes(keyword.toLowerCase()) ||
      val.title.toLowerCase().includes(keyword.toLowerCase())
    )
  }
}
