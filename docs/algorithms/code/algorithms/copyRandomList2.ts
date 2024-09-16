/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  const map = new Map();
  let temp = head;

  while (temp) {
    map.set(temp, new Node(temp.val));
    temp = temp.next;
  }

  temp = head;
  while (temp) {
    const node = map.get(temp);
    node.next = map.get(temp.next) ?? null;
    node.random = map.get(temp.random) ?? null;
    temp = temp.next;
  }

  return map.get(head);
};
