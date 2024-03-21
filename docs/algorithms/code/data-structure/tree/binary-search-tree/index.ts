export class BinarySearchTree {
  value: number;
  left: BinarySearchTree | null = null;
  right: BinarySearchTree | null = null;

  constructor(val: number) {
    this.value = val;
  }
}
