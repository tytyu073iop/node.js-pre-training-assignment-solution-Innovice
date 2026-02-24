export class InMemoryRepository<T extends { id: number }> {
  // private storage
  private items: T[] = [];

  add(entity: T): T {
    this.items.push(entity);
    return structuredClone(entity);
  }

  update(id: number, patch: Partial<T>): T {
    let item = this.items.find((val) => val.id === id)
    if (item == null) {
      throw new Error('No item with this id');

    }

    for (const key in patch) {
      if (patch[key] != null) {
        item[key] = patch[key];
      }
    }

    return structuredClone(item);
  }

  remove(id: number): void {
    this.items = this.items.filter((val) => val.id != id);
  }

  findById(id: number): T | undefined {
    return structuredClone(this.items.find((val) => val.id === id));
  }

  findAll(): T[] {
    return structuredClone(this.items);
  }
}
