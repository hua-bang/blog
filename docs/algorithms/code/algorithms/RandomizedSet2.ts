class RandomizedSet {
  private arr: number[] = [];

  constructor() {

  }

  insert(val: number): boolean {
    if (this.arr.includes(val)) {
      return false;
    }
    this.arr.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.arr.includes(val)) {
      return false;
    }
    this.arr = this.arr.filter(item => item !== val);
    return true;
  }


  getRandom(): number {
    const length = this.arr.length;
    const index = Math.floor(Math.random() * length);
    return this.arr[index];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */