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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let flagNode = new ListNode(0);
  flagNode.next = head;

  let curr = head;

  for (let i = 0; i < n; i++) {
    curr = curr.next;
  }

  if (!curr) {
    return head.next;
  }


  while (curr) {
    curr = curr.next;
    flagNode = flagNode.next;
  }

  flagNode.next = flagNode.next.next;
  return head;
};