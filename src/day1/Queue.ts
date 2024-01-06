type Node<T> = {
  value: T,
  next?: Node<T>,
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>;
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.length++
    this.tail.next = node;
    this.tail = node;
  }
  deque(): T | undefined {
    this.length--;
    if (!this.tail) {
      return undefined;
    }

    const headValue = this.head;
    this.head = this.head?.next;

    return headValue?.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
