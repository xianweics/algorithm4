/// <reference path = "../typings/unionFind.d.ts" />

// unionfind with Number
class UnionFindNumber<T extends number> {
  private readonly list: Array<T> = [];
  private n: number = 0;

  constructor(list: Array<T>) {
    this.list = list;
    this.n = list.length;
  }

  find(index: T): T {
    while (index !== this.list[index]) {
      index = this.list[index];
    }
    return index;
  }

  connected(p: T, q: T): boolean {
    return this.list[p] === this.list[q];
  }

  union(p: T, q: T): void {
    const pid = this.find(p);
    const qid = this.find(q);

    if (pid === qid) return;

    this.list[pid] = qid;
    this.n--;
  }

  count(): number {
    return this.n;
  }
}

const list: Array<number> = [];
for (let i = 0; i < 10; i++) {
  list[i] = i;
}
const unionFind = new UnionFindNumber<number>(list);
console.info(`total count:${unionFind.count()}`);
unionFind.union(0, 1);
console.info(`0,1 connected; total count:${unionFind.count()}`);
unionFind.union(0, 2);
console.info(`0,2 connected; total count:${unionFind.count()}`);
console.info(`1,2 is connected: ${unionFind.connected(1, 2)}`);

// unionfind with Object
class UnionFindObject<T extends TListObject, K extends TObjectKeys> {
  private readonly list: TListObject;
  private n: number;
  private uniqueTag: K;

  constructor(list: T, uniqueTag: K) {
    this.list = list;
    this.n = list.length;
    this.uniqueTag = uniqueTag;
  }

  find(id: string): TObject | undefined {
    let index = this.list.findIndex((value: TObject, index) => value[this.uniqueTag] === id);
    if (index < 0) return undefined;
    let item = this.list[index];
    while (item.index !== index) {
      index = item.index;
      item = this.list[item.index];
    }
    return item;
  }

  connected(p: string, q: string): boolean {
    const pItem: TObject | undefined = this.list.find(item => item[this.uniqueTag] === p);
    const qItem: TObject | undefined = this.list.find(item => item[this.uniqueTag] === q);
    if (pItem === undefined || qItem === undefined) return true;
    return pItem.index === qItem.index;
  }

  union(p: string, q: string): void {
    const pItem = this.find(p);
    const qItem = this.find(q);
    if (pItem === undefined || qItem === undefined) return;
    this.list[pItem.index].index = qItem.index;
    this.n--;
  }

  count(): number {
    return this.n;
  }
}

const listObject: TListObject = [];
for (let i = 0; i < 10; i++) {
  listObject[i] = {
    id: '00' + i,
    index: i,
    data: Math.random().toString(16)
  };
}
const unionFindObject = new UnionFindObject(listObject, 'id');
console.info(`total count:${unionFindObject.count()}`);
unionFindObject.union('000', '001');
console.info(`id: 000, 001 connected; total count:${unionFindObject.count()}`);
unionFindObject.union('000', '002');
console.info(`id: 000, 002 connected; total count:${unionFindObject.count()}`);
console.info(`001,002 is connected: ${unionFindObject.connected('001', '002')}`);
