import Node from './Node';

class Stack<T> {
  private list: Array<T> = [];
  private index: number = 0;

  public isEmpty(): boolean {
    return this.index === 0;
  }

  public size(): number {
    return this.index;
  }

  public push(item: T): void {
    this.list[this.index++] = item;
  }

  public pop(): T | undefined {
    if (this.index === 0) return undefined;
    return this.list[--this.index];
  }
}

class LinkStack<T> {
  private list: Array<Node<T>> = [];
  private index: number = 0;

  public isEmpty(): boolean {
    return this.index === 0;
  }

  public size(): number {
    return this.index;
  }

  public push(value: T): void {
    this.list[this.index++] = new Node(value);
  }

  public pop(): T | undefined {
    if (this.index === 0) return undefined;
    return this.list[--this.index].value;
  }
}

// const stack = new Stack<number>();
const stack = new LinkStack<number>();
for (let i = 0; i < 3; i++) {
  stack.push(i);
  const size = stack.size();
  console.info(`push item: ${i}; size: ${size}`);
}

while (stack.size() > 0) {
  const item = stack.pop();
  const size = stack.size();
  console.info(`pop item: ${item}; size: ${size}`);
}

console.info(`stack is empty: ${stack.isEmpty()}`);

