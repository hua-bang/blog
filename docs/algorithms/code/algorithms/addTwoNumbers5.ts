// 思路：遍历两个链表，将两个链表的值相加，如果相加的值大于10，则需要进位，将进位值赋值给下一个节点
// 时间复杂度：O(n)
// 空间复杂度：O(n)
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
  const tempNode = new ListNode(0);

  let currNode = tempNode;
  let needOne = false;

  while (l1 || l2) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + (needOne ? 1 : 0);
    needOne = sum >= 10;
    let nextNode = new ListNode(sum % 10);
    l1 = l1?.next;
    l2 = l2?.next;
    currNode.next = nextNode;
    currNode = currNode.next;
  }

  if (needOne) {
    currNode.next = new ListNode(1);
  }

  return tempNode.next;
};