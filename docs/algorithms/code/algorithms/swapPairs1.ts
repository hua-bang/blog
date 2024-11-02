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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const temp = new ListNode(0);
  temp.next = head;

  let prev = temp, curr = temp.next;

  while (curr) {
    const next = curr.next;
    if (!next) {
      break;
    }

    prev.next = next;
    curr.next = next.next;
    next.next = curr;
    prev = curr;
    curr = curr.next;
  }

  return temp.next;
};


// function swapPairs(head: ListNode | null): ListNode | null {
//   if( !head) {
//     return null;
//   }

//   let curr = head;

//   while (curr) {
//     const next = curr.next;

//     if(!next) {
//       break;
//     }

//     const nextVal = next.val;
//     next.val = curr.val;
//     curr.val = nextVal;

//     curr = next.next;
//   }

//   return head;
// };