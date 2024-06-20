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
  if (!head) {
    return null;
  }

  let temp = head;

  let count = 0;
  while (temp) {
    count++;
    temp = temp.next;
  }

  const targetIndex = count - n;

  if (targetIndex === 0) {
    return head.next;
  }
  temp = head;

  let index = 0;
  while (temp) {
    if (index + 1 === targetIndex) {
      temp.next = temp.next.next;
      break;
    }
    temp = temp.next;
    index++;
  }

  return head;
}

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
  const node = new ListNode(0, head);
  let left: ListNode | null = head,
    right: ListNode | null = node;

  for (let i = 0; i < n; i++) {
    left = left.next;
  }

  while (left) {
    left = left.next;
    right = right.next;
  }

  right.next = right.next.next;

  return node.next;
}
