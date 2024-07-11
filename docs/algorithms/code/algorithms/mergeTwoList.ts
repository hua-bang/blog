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
// 时间 O(N + M) 空间 O(1)
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

  const headNode = new ListNode(0);

  let currentNode = headNode;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      currentNode.next = list2;
      list2 = list2.next;
    } else {
      currentNode.next = list1;
      list1 = list1.next;
    }

    currentNode = currentNode.next;
  }

  if (!list1 && list2) {
    currentNode.next = list2;
  }

  if (!list2 && list1) {
    currentNode.next = list1;
  }

  return headNode.next;
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  const head: ListNode = new ListNode(0);
  let temp = head;

  while (list1 && list2) {
    const num1 = list1.val;
    const num2 = list2.val;

    if (num1 >= num2) {
      temp.next = new ListNode(num2);
      list2 = list2.next;
    } else {
      temp.next = new ListNode(num1);
      list1 = list1.next;
    }
    temp = temp.next;
  }

  while (list1) {
    temp.next = new ListNode(list1.val);
    temp = temp.next;
    list1 = list1.next;
  }

  while (list2) {
    temp.next = new ListNode(list2.val);
    temp = temp.next;
    list2 = list2.next;
  }

  return head.next;
}
