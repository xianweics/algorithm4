import Node from './Node';

// implement queue using array
class Queue<T> {
  private list: Array<T> = [];
  private index: number = 0;

  public enqueue(item: T): void {
    this.list[this.index++] = item;
  }

  public dequeue(): T | undefined {
    if (this.index === 0) return undefined;
    this.index--;
    const first = this.list[0];
    for (let i = 0; i < this.index; i++) {
      this.list[i] = this.list[i + 1];
    }
    return first;
  }

  public isEmpty(): boolean {
    return this.index === 0;
  }

  public size(): number {
    return this.index;
  }
}

// implement queue using link
class LinkQueue<T> {
  private index = 0;
  private first: Node<T> | undefined;
  private last: Node<T> | undefined;

  public enqueue(value: T): void {
    const node: Node<T> = new Node(value);
    if (this.index === 0) {
      this.first = node;
    } else {
      this.last && (this.last.next = node);
    }
    this.last = node;
    this.index++;
  }

  public dequeue(): undefined | T {
    const item: Node<T> | undefined = this.first;
    this.index--;
    this.first && (this.first = this.first.next);
    item && (item.next = undefined);
    return item ? item.value : undefined;
  }

  public size(): number {
    return this.index;
  }

  public isEmpty(): boolean {
    return this.index === 0;
  }
}

const queue = new LinkQueue<number>();
// const queue = new Queue<number>();
for (let i = 0; i < 3; i++) {
  queue.enqueue(i);
  const size = queue.size();
  console.info(`enqueue item: ${i}; size: ${size}`);
}

while (queue.size() > 0) {
  const item = queue.dequeue();
  const size = queue.size();
  console.info(`dequeue item: ${item}; size: ${size}`);
}

console.info(`queue is empty: ${queue.isEmpty()}`);
