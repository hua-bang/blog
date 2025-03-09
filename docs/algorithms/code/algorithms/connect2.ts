// 思路：通过层序遍历，在遍历每层节点的时候，将当前节点的next指向栈中下一个节点
// 复杂度：时间复杂度O(n)，空间复杂度O(n)
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
  if(!root) {
    return null;
  }  

  const stack: _Node[] = [root];
  const res: number[] = [];

  while(stack.length) {
    const size = stack.length;
    for(let i = 0; i < size; i++) {
      const currNode = stack.shift();
      if(i < size - 1) {
        currNode.next = stack[0];
      }
      res.push(currNode.val);

      if(currNode.left) {
        stack.push(currNode.left);
      }

      if(currNode.right) {
        stack.push(currNode.right);
      }
    }
  }

  return root;
};