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

  const newList = new ListNode(0);

  if (list1.val <= list2.val) {
    newList.next = list1;
    list1 = list1.next;
  } else {
    newList.next = list2;
    list2 = list2.next;
  }

  let curr = newList.next;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  }

  if (list2) {
    curr.next = list2;
  }

  return newList.next;
};