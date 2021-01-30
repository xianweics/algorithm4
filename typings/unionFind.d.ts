declare type TObject = {
  id: string,
  index: number,
  data: string
};
declare type TListObject = Array<TObject>;
declare type TObjectKeys = keyof TObject;
