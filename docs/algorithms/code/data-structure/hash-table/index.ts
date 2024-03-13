class HashTable<K, V> {
  private table: Array<Array<[K, V]>>;
  private size: number; // 哈希表大小

  constructor(size: number = 100) {
    this.size = size;
    this.table = new Array(size);
    for (let i = 0; i < size; i++) {
      this.table[i] = [];
    }
  }

  private hash(key: K): number {
    const stringKey = JSON.stringify(key);
    let hash = 0;
    for (let i = 0; i < stringKey.length; i++) {
      const char = stringKey.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash) % this.size;
  }

  put(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.table[index];
    const foundIndex = bucket.findIndex((item) => item[0] === key);

    if (foundIndex !== -1) {
      bucket[foundIndex][1] = value;
    } else {
      bucket.push([key, value]);
    }
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.table[index];
    const target = bucket.find((item) => item[0] === key);

    return target ? target[1] : undefined;
  }

  remove(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.table[index];
    const foundIndex = bucket.findIndex((item) => item[0] === key);

    if (foundIndex === -1) {
      return false;
    }

    bucket.splice(foundIndex, 1);
    return true;
  }
}

// 使用示例
const hashTable = new HashTable<string, number>();

hashTable.put("key1", 1);
console.log(hashTable.get("key1")); // 输出: 1

hashTable.put("key1", 2);
console.log(hashTable.get("key1")); // 输出: 2

hashTable.remove("key1");
console.log(hashTable.get("key1")); // 输出: undefined
