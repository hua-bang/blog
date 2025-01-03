/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */


// N 节点层序遍历
function levelOrder(root: _Node | null): number[][] {
  if (!root) {
    return [];
  }

  const res: number[][] = [];
  const stack: _Node[] = [root];

  while (stack.length) {
    let size = stack.length;
    const levelRes: number[] = [];

    while (size--) {
      const node = stack.shift();
      levelRes.push(node.val);
      (node.children || []).forEach(child => {
        stack.push(child);
      });
    }
    res.push(levelRes);
  }

  return res;
};