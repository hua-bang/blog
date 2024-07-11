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
  const res: ListNode = new ListNode(0);

  let temp = res;

  let link1 = l1,
    link2 = l2;

  let isAddOne = false;

  while (link1 || link2) {
    let num1 = 0,
      num2 = 0;

    if (link1) {
      num1 = link1.val;
      link1 = link1.next;
    }

    if (link2) {
      num2 = link2.val;
      link2 = link2.next;
    }
    const nextNodeVal = num1 + num2 + (isAddOne ? 1 : 0);

    if (nextNodeVal >= 10) {
      isAddOne = true;
    } else {
      isAddOne = false;
    }

    temp.next = new ListNode(nextNodeVal % 10);
    temp = temp.next;
  }

  if (isAddOne) {
    temp.next = new ListNode(1);
  }

  return res.next;
}
