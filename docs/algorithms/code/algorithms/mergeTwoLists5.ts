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
  if (!list1 && !list2) {
    return null;
  }

  if (!list1 || !list2) {
    return list1 || list2;
  }

  const tempList = new ListNode(0);
  let current = tempList;

  while (list1 && list2) {
    let nextNode;
    if (list1.val >= list2.val) {
      nextNode = list2;
      list2 = list2.next;
    } else {
      nextNode = list1;
      list1 = list1.next;
    }
    current.next = nextNode;
    current = current.next;
  }

  if (list1) {
    current.next = list1;
  }

  if (list2) {
    current.next = list2;
  }

  return tempList.next;
};