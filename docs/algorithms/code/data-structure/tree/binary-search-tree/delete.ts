import { BinarySearchTree } from ".";

const getSmallest = (node: BinarySearchTree): BinarySearchTree => {
  if (node.left === null) {
    return node;
  } else {
    return getSmallest(node.left);
  }
};

const deleteNode = (
  root: BinarySearchTree | null,
  value: number
): BinarySearchTree | null => {
  if (!root) {
    return null;
  }

  if (root.value === value) {
    if (root.left === null && root.right === null) {
      return null;
    }

    if (root.left === null) {
      return root.right;
    }

    if (root.right === null) {
      return root.left;
    }

    // 待删除节点有两个子节点
    // 需要找到待删除节点左子树中的最小值
    const minNode = getSmallest(root.right);
    // 将右子树最小值赋值给待删除节点
    root.value = minNode.value;
    // 删除右子树刚才找到的最小值的节点
    root.right = deleteNode(root.right, minNode.value);
  } else if (value < root.value) {
    root.left = deleteNode(root.left, value);
  } else {
    root.right = deleteNode(root.right, value);
  }

  return root;
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

const result = deleteNode(a, 21);
console.log("node1", JSON.stringify(result, null, 2));
