import { BinaryTree } from "./binary-tree";

const postOrderTraversal = (root: BinaryTree) => {
  const stack: BinaryTree[] = [root];
  const result: number[] = [];

  while (stack.length) {
    const node = stack.pop()!;

    result.unshift(node.value);

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
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

const res = postOrderTraversal(a);
console.log(res);
