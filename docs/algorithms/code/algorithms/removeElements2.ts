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
  if(!head) {
    return null;
  }  

  let tempNode = new ListNode(0);
  tempNode.next = head;

  let prev = tempNode, curr = tempNode.next;

  while(curr) {
    if(curr.val === val) {
      prev.next = curr.next;
      curr = curr.next;
      continue;
    }

    prev = curr;
    curr = curr.next;
  }

  return tempNode.next;
};