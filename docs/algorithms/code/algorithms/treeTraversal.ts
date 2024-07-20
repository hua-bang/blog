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

    current = stack.pop()?.right || null;
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
    current = current.right || null;
  }

  return result;
};
