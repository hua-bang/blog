function reverseBits(n: number): number {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res <<= 1; // 向左移位一位
    res |= n & 1; // 获取n的最低位并将其加到res
    n >>= 1; // 向右移位一位以处理下一位
  }
  return res >>> 0; // 将结果无符号化
}
