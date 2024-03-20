import { BinaryTree } from "./binary-tree";

const preOrderTraversal = (root: BinaryTree) => {
  const stack: BinaryTree[] = [];
  const result: number[] = [];

  let current: BinaryTree | null = root;

  while (current || stack.length) {
    while (current) {
      result.push(current.value);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop() || null;
    current = current?.right || null;
  }

  return result;
};

const a = new BinaryTree(2);
const b = new BinaryTree(3);
const c = new BinaryTree(4);

const b1 = new BinaryTree(6);
const b2 = new BinaryTree(5);

const c1 = new BinaryTree(7);
const c2 = new BinaryTree(8);

a.left = b;
a.right = c;

b.left = b1;
b.right = b2;

c.left = c1;
c.right = c2;

const res = preOrderTraversal(a);
console.log(res);
