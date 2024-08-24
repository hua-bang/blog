function verifyTreeOrder(postorder: number[]): boolean {
  console.log("postorder", postorder);
  if (postorder.length === 0 || postorder.length === 1) {
    return true;
  }

  let p = 0;

  const rootVal = postorder[postorder.length - 1];

  while (postorder[p] < rootVal) {
    p++;
  }

  let mid = p;

  while (postorder[p] > rootVal) {
    p++;
  }

  return (
    p === postorder.length - 1 &&
    verifyTreeOrder(postorder.slice(0, mid)) &&
    verifyTreeOrder(postorder.slice(mid, postorder.length - 1))
  );
}

console.log(verifyTreeOrder([4, 6, 5, 9, 8]));
