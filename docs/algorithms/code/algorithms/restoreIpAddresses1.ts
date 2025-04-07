function isValid(s: string) {
  return s.length > 0 && s.length <= 3 && (s.length === 1 || s[0] !== '0') && parseInt(s) <= 255;
}

function restoreIpAddresses(s: string): string[] {
  const res: string[] = [];
  const path: string[] = [];

  function backtrack(start: number): void {
    // path 长度为4，且start等于s的长度，说明找到了一个合法的解
    if (path.length === 4 && start === s.length) {
      res.push(path.join('.'));
      return;
    }

    // 如果path的长度为4，且start小于s的长度，说明没有找到一个合法的解
    if (path.length === 4) {
      return;
    }

    for (let i = 1; i <= 3; i++) {
      const sub = s.substring(start, start + i);
      if (!isValid(sub)) {
        continue;
      }
      path.push(sub);
      backtrack(start + i);
      path.pop();
    }
  }

  backtrack(0);
  return res;
};