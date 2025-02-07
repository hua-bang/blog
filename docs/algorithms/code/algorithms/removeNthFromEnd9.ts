// 思路：定义 tempNode, 使用快慢指针，快指针指向 head, 慢指针指向 tempNode, 
// 然后快指针先走 n 步，然后快慢指针一起走，当快指针走到链表末尾时，慢指针指向的节点就是要删除的节点的前置节点。
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
  const tempNode = new ListNode(0);
  tempNode.next = head;
  let slow = tempNode, fast = head;
  for(let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if(!fast) {
    return head.next;
  }

  while(fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return tempNode.next;
};