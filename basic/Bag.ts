import Node from "./Node";

// implement bag using array
class Bag<T> {
  private list: Array<T> = [];
  private index: number = 0;

  public isEmpty(): boolean {
    return this.index === 0;
  }

  public size(): number {
    return this.index;
  }

  public add(item: T): void {
    this.list[this.index++] = item;
  }

  // custom iterator for 'for...of'
  public [Symbol.iterator]() {
    let n = this.index;
    return {
      next: (): { value: T, done: false } | { value: undefined, done: true } => {
        n--;
        if (n >= 0) {
          return {
            value: this.list[n],
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
}

// implement bag using link
class LinkBag<T> {
  private head: Node<T> | null = null;
  private index: number = 0;

  public isEmpty(): boolean {
    return this.index === 0;
  }

  public size(): number {
    return this.index;
  }

  public add(value: T): void {
    let node: Node<T> | null = new Node(value);
    this.index !== 0 && (node.next = this.head);
    this.head = node;
    this.index++;
  }

  public [Symbol.iterator]() {
    let head = this.head;
    return {
      next: (): { value: T, done: false } | { value: undefined, done: true } => {
        if (head) {
          const value = head.value;
          head = head.next;
          return {
            value: value,
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
}

// const bag = new Bag<number>();
const bag = new LinkBag<number>();
for (let i = 0; i < 3; i++) {
  bag.add(i);
  const size = bag.size();
  console.info(`add item: ${i}; size: ${size}`);
}

for (const item of bag) {
  console.info(`item: ${item}`);
}
