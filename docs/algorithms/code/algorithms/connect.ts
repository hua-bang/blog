/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
  if (!root) {
    return null;
  }

  const queue: Array<_Node> = [root];

  while (queue.length) {
    const n = queue.length;
    let last = null;

    for (let i = 0; i < n; i++) {
      let node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      if (last) {
        last.next = node;
      }

      last = node;
    }
  }

  return root;
}
