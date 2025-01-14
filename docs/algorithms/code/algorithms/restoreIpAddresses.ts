function restoreIpAddresses(s: string): string[] {
  const res: string[] = [];
  const path: string[] = []

  function isValid(s: string) {
    return (
      s.length > 0 && s.length <=3 
      &&
      (
        s.length === 1 || s[0] !== '0'
      ) 
      &&
      parseInt(s) <= 255 
    )
  }

  function backtrack(start: number): void {
    // 如果path的长度为4，且start等于s的长度，说明找到了一个合法的解
    if(path.length === 4 && start === s.length) {
      res.push(path.join('.'));
      return;
    }

    // 如果path的长度为4，但是start没有等于s的长度，说明不是一个合法的解, 我们这个时候剪枝
    if(path.length === 4) {
      return;
    }
    
    for(let length = 1; length <= 3; length++) {
      if(start + length > s.length) {
        break;
      }
      const segment = s.substring(start, start + length);
      if(isValid(segment)) {
        path.push(segment);
        backtrack(start + length);
        path.pop();
      }

    }
  }

  backtrack(0)

  return res;
}