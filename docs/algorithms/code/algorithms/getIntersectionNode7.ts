/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 概述：获取两个链表的交点
// 思路：如果两个链表有交集，则可以用指针【先走 A，再走B，到达交点的路径】和 指针【先走 B，再走A，到达交点的路径】的长度相同。
// 使用双指针，分别指向两个链表的头部，然后同时遍历两个链表，如果两个指针指向的节点不相等，就将两个指针分别指向另一个链表的头部，如果两个指针指向的节点相等，就返回这个节点。
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
    pa = pa === null ? headB : pa.next;
    pb = pb === null ? headA : pb.next;
  }

  return pa;
};