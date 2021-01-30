interface INode<T> {
  value: T;
  next: INode<T> | undefined;
}

declare class TNode<T> implements INode<T> {
  public value: T;
  public next: INode<T> | undefined;

  constructor(value: T): void
}
