import Node from "./Node";

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


  public [Symbol.iterator]() {
    let n = this.size();
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

class LinkBag<T> {
  private list: Array<Node<T>> = [];
  private index: number = 0;

  public isEmpty(): boolean {
    return this.index === 0;
  }

  public size(): number {
    return this.index;
  }

  public add(value: T): void {
    this.list[this.index++] = new Node(value);
  }

  public [Symbol.iterator]() {
    let n = this.size();
    return {
      next: (): { value: T, done: false } | { value: undefined, done: true } => {
        n--;
        if (n >= 0) {
          return {
            value: this.list[n].value,
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
