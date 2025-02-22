// 思路：使用一个临时节点，然后交换两个节点的位置，然后将指针指向下一个节点，然后重复上面的步骤，直到最后一个节点。
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

function swapPairs(head: ListNode | null): ListNode | null {
  if(!head) {
    return null;
  }

  const tempNode = new ListNode(0);

  tempNode.next = head;

  let prev = tempNode, curr = head;

  while(curr?.next) {
    // prev -> first/curr -> second
    const first = curr, second = curr.next;
    // prev -> first -> second -> curr
    curr = curr.next.next;
    // prev -> second -> curr
    prev.next = second;
    // prev -> second -> first
    second.next = first;
    // prev -> second -> first -> curr;
    first.next = curr;
    // second -> first/prev -> curr;
    prev = first;
  }

  return tempNode.next;
};