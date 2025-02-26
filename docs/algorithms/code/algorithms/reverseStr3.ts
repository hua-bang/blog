// 思路：从 i 开始，每次取 2k 个字符，如果这段范围的字符个数大于等于 k 个，那么就反转前 k 个字符，否则就反转全部字符
// 复杂度分析：时间复杂度O(n)， 空间复杂度为 O(1) 
function reverseStr(s: string, k: number): string {
  const arr = s.split("");

  for(let i = 0; i < s.length; i += 2 * k) {
    const left = i, right = Math.min(i + k - 1, s.length - 1);
    reverseArr(arr, left, right);
  }

  return arr.join("");
};

function reverseArr(s: string[], start: number, end: number) {
  while(start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
}