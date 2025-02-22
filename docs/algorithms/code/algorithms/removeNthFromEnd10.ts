// 思路：使用快慢指针，其中慢指针特殊处理下（提前一个节点），快指针先走n步，然后快慢指针一起走，直到快指针走到末尾，慢指针的下一个节点就是要删除的节点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head;
  let tempNode = new ListNode(0);
  tempNode.next = head;
  let slow = tempNode;

  for(let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if(fast === null) {
    return head.next;
  }

  while(fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return tempNode.next;
};