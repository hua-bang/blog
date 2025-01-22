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
// 概述：删除链表中等于给定值 val 的所有节点。
// 思路：创建一个虚拟节点，指向头节点，然后遍历链表，如果当前节点的值等于给定值，就删除当前节点，否则继续遍历。

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if(!head){
    return null;
  }   

  const tempNode = new ListNode(0);
  tempNode.next = head;
  let prev = tempNode, curr = tempNode.next;

  while(curr) {
    if(curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = prev.next;
    }
    curr = curr.next;
  }

  return tempNode.next;
};

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if(!head){
    return null;
  }   

  const tempNode = new ListNode(0);
  tempNode.next = head;
  let curr = tempNode;

  while(curr.next) {
    if(curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return tempNode.next;
};