/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeNodes(head: ListNode | null): ListNode | null {
  const nextNode = new ListNode(0);
  let total = 0,
    currNode = nextNode;
  head = head.next;
  while (head) {
    if (head.val === 0) {
      const node = new ListNode(total);
      currNode.next = node;
      currNode = currNode.next;
      total = 0;
    } else {
      total += head.val;
    }

    head = head.next;
  }

  return nextNode.next;
}
