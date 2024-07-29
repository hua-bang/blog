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

function equalTree(A: TreeNode | null, B: TreeNode | null) {
  if (!B) {
    return true;
  }

  if (!A) {
    return false;
  }

  return (
    A.val === B.val && equalTree(A.left, B.left) && equalTree(A.right, B.right)
  );
}

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!A || !B) {
    return false;
  }

  const stack: TreeNode[] = [A];

  while (stack.length) {
    let size = stack.length;
    while (size) {
      const node = stack.shift();
      if (equalTree(node, B)) {
        return true;
      }

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }

      size--;
    }
  }

  return false;
}
// BFS
function equalTree(A: TreeNode | null, B: TreeNode | null) {
  if (!B) {
    return true;
  }

  if (!A) {
    return false;
  }

  return (
    A.val === B.val && equalTree(A.left, B.left) && equalTree(A.right, B.right)
  );
}

// DFS
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!A || !B) {
    return false;
  }

  return (
    equalTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  );
}
