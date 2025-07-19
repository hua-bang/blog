class RandomizedSet {
  // map， key 为数值，value 为索引
  private map: Record<number, number> = {};
  // 存储具体数值
  private list: number[] = [];

  constructor() { }

  insert(val: number): boolean {
    if (this.map[val] !== undefined) {
      return false;
    }

    this.map[val] = this.list.length;
    this.list.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (this.map[val] === undefined) {
      return false;
    }

    const index = this.map[val]!;
    const last = this.list.pop()!;

    if (last !== val) {
      this.list[index] = last;
      this.map[last] = index;
    }

    delete this.map[val];
    return true;
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}