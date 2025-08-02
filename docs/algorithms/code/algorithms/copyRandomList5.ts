/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

// 复杂度：时间O(n)，空间O(n)
function copyRandomList(head: _Node | null): _Node | null {
  if (!head) {
    return null;
  }

  const map = new Map<_Node, _Node>();

  let curr = head;

  while (curr) {
    const newNode = new _Node(curr.val);
    map.set(curr, newNode);
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    const newNode = map.get(curr);
    newNode.next = map.get(curr.next) || null;
    newNode.random = map.get(curr.random) || null;
    curr = curr.next;
  }

  return map.get(head);
};