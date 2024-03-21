import { BinarySearchTree } from ".";

export const insertNode = (root: BinarySearchTree, value: number): boolean => {
  if (!root) {
    return false;
  }

  let currentNode: BinarySearchTree | null = root;

  while (currentNode) {
    if (currentNode.value === value) {
      return false;
    }

    if (currentNode.value > value) {
      if (!currentNode.left) {
        currentNode.left = new BinarySearchTree(value);
        return true;
      } else {
        currentNode = currentNode.left;
      }
      continue;
    }

    if (currentNode.value < value) {
      if (!currentNode.right) {
        currentNode.right = new BinarySearchTree(value);
        return true;
      } else {
        currentNode = currentNode.right;
      }
      continue;
    }
  }

  return false;
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

const result = insertNode(a, 17);
console.log("node1", result, JSON.stringify(a, null, 2));
