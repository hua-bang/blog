// 思路：两个节点都走 A + B 的路程，如果有环，则一定相遇，如果没环，则最后都是null
// 复杂度分析：时间复杂度O(n)，空间复杂度O(1)
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
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let pa = headA, pb = headB;

  while (pa !== pb) {
    pa = pa === null ? headB : pa.next;
    pb = pb === null ? headA : pb.next;
  }

  return pa;
};