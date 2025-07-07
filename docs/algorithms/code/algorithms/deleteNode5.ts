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
// 思路：遍历，保持 prev, curr 指针
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return null;
  }

  if (head.val === val) {
    return head.next;
  }

  let prev = head, curr = head.next;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
      break;
    }
    const next = curr.next;
    prev = curr;
    curr = next;
  }

  return head;
};