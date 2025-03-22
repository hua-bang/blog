/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func postorderTraversal(root *TreeNode) []int {
  if root == nil {
    return []int{};
  }

  res := []int{};
  stack := []*TreeNode{};

  for len(stack) > 0 || root != nil {
    for root != nil {
      res = append([]int{root.Val}, res...);
      stack = append(stack, root);
      root = root.Right;
    }

    root = stack[len(stack) - 1];
    stack = stack[:len(stack) - 1]
    root = root.Left;
  }

  return res;
}