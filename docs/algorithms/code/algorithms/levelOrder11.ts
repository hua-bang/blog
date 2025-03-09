// 思路：通过栈来实现广度优先遍历，先将根节点入栈，然后循环遍历栈，每次遍历都将栈中的节点出栈，然后将节点的值存入数组中，然后将节点的子节点入栈，直到栈为空，遍历结束。
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(n)
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


function levelOrder(root: _Node | null): number[][] {
  if(!root) {
    return [];
  }

  const res: number[][] = [];

  const stack: _Node[] = [root];

  while(stack.length) {
    let size = stack.length;
    const levelRes: number[] = [];
    while(size--) {
      let node = stack.shift();

      const { children = [] } = node;

      levelRes.push(node.val);

      for(let child of children) {
        stack.push(child);
      }
    }
    res.push(levelRes);
  }

  return res;
};