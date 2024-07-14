function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 || postorder.length === 0) {
    return null;
  }

  const rootNode = new TreeNode(postorder[postorder.length - 1]);

  const rootIndexInOrder = inorder.findIndex((item) => item === rootNode.val);

  rootNode.left = buildTree(
    inorder.slice(0, rootIndexInOrder),
    postorder.slice(0, rootIndexInOrder)
  );

  rootNode.right = buildTree(
    inorder.slice(rootIndexInOrder + 1),
    postorder.slice(rootIndexInOrder, postorder.length - 1)
  );

  return rootNode;
}
