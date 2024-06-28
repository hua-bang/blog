class RandomizedSet {
  private nums: number[];
  private map: Record<string, number | undefined>;

  constructor() {
    this.nums = [];
    this.map = {};
  }

  insert(val: number): boolean {
    if (this.map[val] !== undefined) {
      return false;
    }

    this.map[val] = this.nums.length;
    this.nums.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (this.map[val] === undefined) {
      return false;
    }

    const targetIndex = this.map[val];
    this.nums[targetIndex] = this.nums[this.nums.length - 1];
    this.map[this.nums[targetIndex]] = targetIndex;
    this.nums.pop();
    this.map[val] = undefined;
    return true;
  }

  getRandom(): number {
    const index = Math.floor(Math.random() * this.nums.length);
    return this.nums[index];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
