/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 题目描述： 给定一个二叉树，计算所有左叶子节点的和
// 思路： 使用 BFS 进行遍历，在遍历过程中，判断当前节点是否是左叶子节点，如果是，则将当前节点的值加入到结果中
// 注意： 左叶子节点是指左子树的叶子节点，而不是左子树的根节点

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const stack: TreeNode[] = [root];
  let res = 0;

  while (stack.length) {
    let size = stack.length;
    while (size--) {
      const node = stack.shift();
      const leftNode = node.left;
      if (leftNode) {
        stack.push(leftNode);
        if (!leftNode.left && !leftNode.right) {
          res += leftNode.val;
        }
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }

  return res;
};

// 思路： 使用 DFS 进行遍历，在遍历过程中，判断当前节点是否是左叶子节点，如果是，则将当前节点的值加入到结果中
// 注意： 左叶子节点是指左子树的叶子节点，而不是左子树的根节点

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let res = 0;

  const dfs = (node: TreeNode, isLeft: boolean) => {
    if (isLeft && !node.left && !node.right) {
      res += node.val;
      return;
    }

    if (node.left) {
      dfs(node.left, true);
    }

    if (node.right) {
      dfs(node.right, false);
    }
  }

  dfs(root, false);

  return res;
}
