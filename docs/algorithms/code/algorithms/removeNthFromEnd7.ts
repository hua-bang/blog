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

// 本质上是使用快慢指针
// 快指针先跑 n 步，则等后续 快指针为空的时候，慢指针刚好为倒数第 n 个元素
// 当这个时候，由于我们需要做删除操作，所以需要加多一个前置节点，让慢指针指向这个节点。
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const temp = new ListNode(0);
  temp.next = head;

  let slow = temp, fast = head;

  while (n--) {
    fast = fast.next;
  }

  if (fast === null) {
    return head.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return temp.next;
};