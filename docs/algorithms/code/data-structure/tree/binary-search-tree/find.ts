import { BinarySearchTree } from ".";

const findNode = (root: BinarySearchTree, value: number) => {
  if (!root) {
    return null;
  }

  let currentNode: BinarySearchTree | null = root;

  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode;
    }

    if (currentNode.value > value) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return null;
};

const a = new BinarySearchTree(10);
const b = new BinarySearchTree(6);
const c = new BinarySearchTree(21);

const b1 = new BinarySearchTree(4);
const b2 = new BinarySearchTree(8);

const c1 = new BinarySearchTree(15);
const c2 = new BinarySearchTree(23);

a.left = b;
a.right = c;

b.left = b1;
b.right = b2;

c.left = c1;
c.right = c2;

const node = findNode(a, 21);
console.log("node1", node);

const node2 = findNode(a, 0);
console.log("node2", node2);
