// 思路：使用双指针遍历
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
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
var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) {
    return null;
  }

  let pa = headA, pb = headB;

  while(pa !== pb) {
    pa = pa ? pa.next : headB;
    pb = pb ? pb.next : headA;
  }

  return pa
};