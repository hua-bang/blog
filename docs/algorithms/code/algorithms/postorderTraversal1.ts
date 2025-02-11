function postorderTraversal(root: TreeNode | null): number[] {
  if(!root) {
    return [];
  }  

  const res: number[] = [];
  const stack: TreeNode[] = [];

  while(stack.length || root) {
    while(root) {
      res.unshift(root.val);
      stack.push(root);
      root = root.right;
    }

    root = stack.pop().left;
  }

  return res;
};