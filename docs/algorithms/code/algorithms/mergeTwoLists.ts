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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  let list = list1.val > list2.val ? list2 : list1;

  if (list1.val > list2.val) {
    list2 = list2.next;
  } else {
    list1 = list1.next;
  }

  let temp = list;

  while (list1 || list2) {
    if (!list2 || (list1 && list1.val <= list2.val)) {
      temp.next = list1;
      list1 = list1.next;
      temp = temp.next;
      continue;
    }

    if (!list1 || (list2 && list2.val < list1.val)) {
      temp.next = list2;
      list2 = list2.next;
      temp = temp.next;
    }
  }

  return list;
}
