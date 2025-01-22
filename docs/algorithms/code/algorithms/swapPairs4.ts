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
  if(!head) {
    return null;
  }

  const newHead = new ListNode(0);
  newHead.next = head;
  let prev = newHead, curr = newHead.next;

  while(curr && curr.next) {
    // 定义当前组和下一组的节点
    const first = curr;
    const second = curr.next;
    const third = curr.next.next;

    // 交换节点
    prev.next = second; // 前驱指向第二个节点
    second.next = curr; // 第二个节点指向第一个节点
    first.next = third; // 第一个节点指向下一组的起始
    
    // 移动指针到下一组的前驱和当前节点
    prev = first;
    curr = third;
  }

  return newHead.next;
};