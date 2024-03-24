function getHeight(node: AVLNode | null): number {
  if (node === null) {
    return 0;
  }
  return node.height;
}

function leftRotate(x: AVLNode): AVLNode {
  const y = x.right!;
  const temp = y.left;

  y.left = x;
  x.right = temp;

  x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;
  y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;

  // Return new root
  return y;
}

// Usage example
const root = new AVLNode(30);
root.left = new AVLNode(20);
root.right = new AVLNode(40);
root.right.right = new AVLNode(50); // Making the tree right-heavy
root.right.right.right = new AVLNode(60); // Adding further imbalance

// Assuming the tree needs a left rotation at the root
const newRoot = leftRotate(root);
