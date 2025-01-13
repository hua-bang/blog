// 描述： 分割回文串
// 思路：回溯法

function isPalindrome(s: string, start: number, end: number): boolean {
  let left = start, right = end;
  while(left < right) {
    if(s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function partition(s: string): string[][] {
  if(!s.length) {
    return [];
  }

  const res: string[][] = [], path: string[] = [];

  const backtrack = (startIndex: number) => {
    // 如果 startIndex 等于 s 的长度，说明已经遍历到了字符串的末尾
    if(startIndex === s.length) {
      res.push([...path]);
      return;
    }

    for(let i = startIndex; i < s.length; i++) {
      if(!isPalindrome(s, startIndex, i)) {
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