interface TNode<T> {
  value: T;
  next: TNode<T> | null;
}

export default class Node<T> implements TNode<T> {
  public value: T;
  public next: TNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
