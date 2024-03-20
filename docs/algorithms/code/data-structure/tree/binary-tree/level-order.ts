import { BinaryTree } from "./binary-tree";

const levelOrder = (root: BinaryTree) => {
  const res: number[] = [];
  const queue: BinaryTree[] = [root];
  while (queue.length) {
    const node = queue.shift()!;
    res.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return res;
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

const res = levelOrder(a);
console.log(res);
