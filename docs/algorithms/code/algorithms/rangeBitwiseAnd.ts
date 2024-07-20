function rangeBitwiseAnd(left: number, right: number): number {
  while (left < right) {
    // Remove the rightmost bit until left == right
    right = right & (right - 1);
  }
  return left & right;
}
