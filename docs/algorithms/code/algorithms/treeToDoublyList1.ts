/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) {
    return null;
  }

  const res = [];
  const stack = [];
  let head = root;

  while (stack.length || head) {
    while (head) {
      stack.push(head);
      head = head.left;
    }

    head = stack.pop();
    res.push(head);
    head = head.right;
  }

  head = res.shift();

  if (!res.length) {
    head.right = head;
    head.left = head;
    return head;
  }

  res.reduce((prev, curr) => {
    prev.right = curr;
    curr.left = prev;
    return curr;
  }, head);

  head.left = res[res.length - 1];

  res[res.length - 1].right = head;

  return head;
};
