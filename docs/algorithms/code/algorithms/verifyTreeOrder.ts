function verifyTreeOrder(postorder: number[]): boolean {
  return verifyHelper(0, postorder.length - 1, postorder);
}

function verifyHelper(left: number, right: number, postorder: number[]) {
  if (left >= right) {
    return true;
  }

  let p = left;
  while (postorder[p] < postorder[right]) {
    p++;
  }
  let m = p;

  while (postorder[p] > postorder[right]) {
    p++;
  }

  return (
    p === right &&
    verifyHelper(left, m - 1, postorder) &&
    verifyHelper(m, right - 1, postorder)
  );
}
