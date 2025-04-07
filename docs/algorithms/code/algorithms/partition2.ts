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
    if(startIndex >= s.length) {
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