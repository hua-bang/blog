function detectCycle(head: ListNode | null): ListNode | null {
  const map = new Map<ListNode, boolean>();

  while (head) {
    if (map.get(head)) {
      return head;
    }
    map.set(head, true);
    head = head.next;
  }

  return null;
};