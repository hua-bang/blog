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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  const newListNode = new ListNode(0);

  if (list1.val <= list2.val) {
    newListNode.next = list1;
    list1 = list1.next;
  } else {
    newListNode.next = list2;
    list2 = list2.next;
  }

  let curr = newListNode.next;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      curr = curr.next;
      list1 = list1.next;
    } else {
      curr.next = list2;
      curr = curr.next;
      list2 = list2.next;
    }
  }

  if (list1) {
    curr.next = list1;
  }

  if (list2) {
    curr.next = list2;
  }

  return newListNode.next;
};