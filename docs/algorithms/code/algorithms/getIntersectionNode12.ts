/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 思路：双指针，如果两个链表有交点，那么两个指针一定会相遇。
// 如果两个链表没有交点，那么两个指针会同时到达链表的末尾。
// 复杂度分析：时间复杂度 O(n), 空间复杂度O(1)
var getIntersectionNode = function (headA, headB) {
  let la = headA, lb = headB;

  while (la !== lb) {
    la = la ? la.next : headB;
    lb = lb ? lb.next : headA;
  }

  return la;
};