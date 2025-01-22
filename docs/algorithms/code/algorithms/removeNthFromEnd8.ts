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

// 概述：删除链表的倒数第 n 个节点
// 思路：使用快慢指针，快指针先走 n 步，然后快慢指针同时走，当快指针到达链表尾部时，慢指针指向的节点就是倒数第 n 个节点。
// 注意：这里的慢指针，我们会用一个虚拟节点，指向头节点，这样可以避免删除头节点的情况，同时也方便后续进行删除操作。

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const tempNode = new ListNode(0);
  tempNode.next = head;
  let slow = tempNode, fast = head;
  while(n--) {
    fast = fast.next;
  }

  if(fast === null) {
    tempNode.next = tempNode.next.next;
    return tempNode.next;
  }

  while(fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return tempNode.next;
};