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

function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
  let fast: ListNode | null = head,
    slow: ListNode = head;

  while (cnt) {
    fast = fast.next;
    cnt--;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
  let fast = head;

  while (cnt) {
    fast = fast.next;
    cnt--;
  }

  let slow = head;

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

function trainningPlan(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  const newHead = new ListNode(0);

  let temp = newHead;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }

  if (l1) {
    temp.next = l1;
  }

  if (l2) {
    temp.next = l2;
  }

  return newHead.next;
}

function trainingPlan(actions: number[]): number[] {
  const res: number[] = [];
  let left = 0,
    right = actions.length - 1;

  for (let i = 0; i < actions.length; i++) {
    const val = actions[i];

    if (val % 2 === 0) {
      res[right--] = val;
    } else {
      res[left++] = val;
    }
  }

  return res;
}
