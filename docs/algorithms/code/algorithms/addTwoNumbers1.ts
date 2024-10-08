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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let plusOne = false;

  const res: number[] = [];

  while (l1 || l2) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;

    const nextVal = plusOne ? l1Val + l2Val + 1 : l1Val + l2Val;
    plusOne = nextVal >= 10 ? true : false;
    res.unshift(nextVal % 10);
    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (plusOne) {
    res.unshift(1);
  }

  const newList = new ListNode(0);
  let curr = newList;

  for (let i = res.length - 1; i >= 0; i--) {
    curr.next = new ListNode(res[i]);
    curr = curr.next;
  }

  return newList.next;
}
