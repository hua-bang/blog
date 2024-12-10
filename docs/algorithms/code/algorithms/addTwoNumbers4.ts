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
  let nums: number[] = [];

  while (l1 || l2) {
    const nextVal = (l1?.val || 0) + (l2?.val || 0) + (addOne ? 1 : 0);
    addOne = nextVal >= 10 ? true : false;
    nums.push(nextVal % 10);
    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (addOne) {
    nums.push(1);
  }

  const newList = new ListNode(0);
  let curr = new ListNode(nums[0]);
  newList.next = curr;

  for (let i = 1; i < nums.length; i++) {
    curr.next = new ListNode(nums[i]);
    curr = curr.next;
  }

  return newList.next;
};