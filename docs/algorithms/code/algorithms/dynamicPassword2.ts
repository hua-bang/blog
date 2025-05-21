// 思路：遍历字符串，将字符串分成两部分，前 target 个字符和后 n - target 个字符
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(n)
function dynamicPassword(password: string, target: number): string {
  let res = '';

  const n = password.length;

  for (let i = target; i < n; i++) {
    res += password[i];
  }

  for (let i = 0; i < target; i++) {
    res += password[i];
  }

  return res;
};

function dynamicPassword(password: string, target: number): string {
  const n = password.length;

  const arr = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const nextIndex = (i - target + n) % n;
    arr[nextIndex] = password[i];
  }

  return arr.join('');
};