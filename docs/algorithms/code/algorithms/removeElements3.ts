// 思路：使用双指针遍历
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return null;
  }  

  let newNode = new ListNode(0);
  newNode.next = head;

  let prev = newNode, curr = newNode.next;

  while(curr !== null) {
    if(curr.val === val) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return newNode.next;
};