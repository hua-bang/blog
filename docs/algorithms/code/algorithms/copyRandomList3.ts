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


function copyRandomList(head: _Node | null): _Node | null {
  if (!head) {
    return null;
  }

  const map = new Map<_Node, _Node>();

  let curr = head;

  while (curr) {
    if (!map.has(curr)) {
      const node = new _Node(curr.val);
      map.set(curr, node);
    }
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    const node = map.get(curr);
    if (node) {
      node.next = curr.next ? map.get(curr.next) : null;
      node.random = curr.random ? map.get(curr.random) : null;
    }
    curr = curr.next;
  }

  return map.get(head);
};