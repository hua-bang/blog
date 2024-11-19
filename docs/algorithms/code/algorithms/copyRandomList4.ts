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
      map.set(curr, new _Node(curr.val));
    }
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    const newCurr = map.get(curr);
    newCurr.next = map.has(curr.next) ? map.get(curr.next) : null;
    newCurr.random = map.has(curr.random) ? map.get(curr.random) : null;
    curr = curr.next;
  }

  return map.get(head);
};