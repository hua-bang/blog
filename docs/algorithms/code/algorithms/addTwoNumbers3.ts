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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let addOne = false;
  const res: number[] = [];
  while (l1 || l2) {
    const l1Val = l1?.val || 0, l2Val = l2?.val || 0;
    const val = l1Val + l2Val + (addOne ? 1 : 0);
    addOne = val >= 10;
    res.push(val % 10);
    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (addOne) {
    res.push(1);
  }

  const newList = new ListNode(0);
  let curr = newList;
  for (let i = 0; i < res.length; i++) {
    curr.next = new ListNode(res[i]);
    curr = curr.next;
  }

  return newList.next;
};