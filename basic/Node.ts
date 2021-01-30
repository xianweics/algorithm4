/// <reference path = "../typings/node.d.ts" />
export default class Node<T> implements TNode<T> {
  public value: T;
  public next: TNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}
