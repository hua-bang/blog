class BinaryTree {
  val: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
}

const preOrderTraversal = (root: BinaryTree) => {
  const stack: BinaryTree[] = [];
  const res: number[] = [];

  let current: BinaryTree | null = root;

  while (current || stack.length) {
    while (current) {
      res.push(current.val);
      stack.push(current);
      current = current.left;
    }

    current = stack.pop()!.right;
  }

  return res;
};

const inOrderTraversal = (root: BinaryTree) => {
  const stack: BinaryTree[] = [];
  const result: number[] = [];

  let current: BinaryTree | null = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop()!;
    result.push(current.val);
    current = current.right;
  }

  return result;
};

const postTraversal = (root: BinaryTree) => {
  const stack: BinaryTree[] = [root];
  const result: number[] = [];

  while (stack.length) {
    const node = stack.pop()!;

    result.unshift(node.val);

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return result;
};
