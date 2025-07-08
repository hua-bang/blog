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

// 思路：双指针，分别指向 l1 和 l2 的当前节点，比较两个节点的值，将较小的节点插入到新链表中
// 复杂度分析：时间复杂度 O(m + n), 空间复杂度 O(1)

function trainningPlan(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) {
    return null;
  }

  if (!l1 || !l2) {
    return l1 || l2;
  }

  let head = new ListNode(0);

  let curr = head;

  while (l1 && l2) {
    if (l1.val >= l2.val) {
      curr.next = l2;
      l2 = l2.next;
    } else {
      curr.next = l1;
      l1 = l1.next;
    }

    curr = curr.next;
  }

  curr.next = l1 || l2;

  return head.next;
};