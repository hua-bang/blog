function getHeight(node: AVLNode | null): number {
  if (node === null) {
    return 0;
  }
  return node.height;
}

function rightRotate(y: AVLNode): AVLNode {
  const x = y.left!;
  const temp = x.right;

  y.left = temp;
  x.right = y;

  y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;
  x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;

  return x;
}

// Usage
const root = new AVLNode(30);
root.left = new AVLNode(20);
root.right = new AVLNode(40);
root.left.left = new AVLNode(10);
root.left.left.left = new AVLNode(5);

// Assuming the tree needs a right rotation at the root
const newRoot = rightRotate(root);
