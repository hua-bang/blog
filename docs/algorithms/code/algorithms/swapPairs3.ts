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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  const temp = new ListNode(0);
  temp.next = head;

  let prev = temp, curr = temp.next;

  while (curr) {
    const second = curr.next;
    if (!second) {
      break;
    }

    const thrid = curr.next.next;
    second.next = curr;
    curr.next = thrid;
    prev.next = second;
    // 这里需要跳两个节点
    prev = curr;
    curr = thrid;
  }

  return temp.next;
};