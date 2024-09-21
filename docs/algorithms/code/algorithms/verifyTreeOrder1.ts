function verifyTreeOrder(postorder: number[]): boolean {
  if (!postorder.length) {
    return true;
  }

  const rootVal = postorder[postorder.length - 1];

  let index = 0;
  while (postorder[index] < rootVal) {
    index++;
  }

  let mid = index;

  while (postorder[index] > rootVal) {
    index++;
  }

  return (
    index === postorder.length - 1 &&
    verifyTreeOrder(postorder.slice(0, mid)) &&
    verifyTreeOrder(postorder.slice(mid, postorder.length - 1))
  );
}
