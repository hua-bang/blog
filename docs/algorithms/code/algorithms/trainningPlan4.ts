// https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/?envType=study-plan-v2&envId=coding-interviews
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

function trainningPlan(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  const list = new ListNode(0);

  let current = list;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  while (l1) {
    current.next = l1;
    l1 = l1.next;
    current = current.next;
  }

  while (l2) {
    current.next = l2;
    l2 = l2.next;
    current = current.next;
  }

  return list.next;
}
