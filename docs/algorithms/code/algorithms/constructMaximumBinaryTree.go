// 思路：找到最大值，然后递归构造左右子树
// 复杂度分析：时间复杂度 O(n^2)，空间复杂度 O(n)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func constructMaximumBinaryTree(nums []int) *TreeNode {
  if len(nums) == 0 {
    return nil
  }
  max := nums[0]
  maxIndex := 0
  for i := 0; i < len(nums); i++ {
    if nums[i] > max {
      max = nums[i]
      maxIndex = i
    }
  }
  root := &TreeNode{Val: max}
  root.Left = constructMaximumBinaryTree(nums[:maxIndex])
  root.Right = constructMaximumBinaryTree(nums[maxIndex + 1:])
  return root
}