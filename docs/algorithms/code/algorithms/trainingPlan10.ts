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

// 思路：快慢指针， fast 先走 cnt 步
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)

function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
  let fast = head, slow = head;

  for (let i = 0; i < cnt; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};