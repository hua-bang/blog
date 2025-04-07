// 思路：通过回溯算法，枚举所有可能的分割方案，判断每个分割方案是否为回文串，如果是，则将其加入结果集中。
// 时间复杂度：O(2^n * n), 其中2^n是因为切割方案有 2 ^ n - 1 种，每个分割方案需要 O(n) 的时间复杂度判断是否为回文串。
// 空间复杂度：O(2^n * n), 其中2^n是 path 需要存储的所有分割方案，而 n 是调用栈的深度。
function isPalindrome(s: string, left: number, right: number): boolean {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function partition(s: string): string[][] {
  const res: string[][] = [];
  const path: string[] = [];
  const backtrack = (startIndex: number) => {
    if (startIndex >= s.length) {
      res.push([...path]);
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      if (!isPalindrome(s, startIndex, i)) {
        continue;
      }
      path.push(s.slice(startIndex, i + 1));
      backtrack(i + 1);
      path.pop();
    }
  }
  backtrack(0);
  return res;
};