export class BinaryTree {
  value: number;
  left: BinaryTree | null = null;
  right: BinaryTree | null = null;

  constructor(val: number) {
    this.value = val;
  }
}

const a = new BinaryTree(2);
const b = new BinaryTree(3);
const c = new BinaryTree(4);

a.left = b;
a.right = c;

console.log(a);
