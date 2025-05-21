// 思路：遍历字符串，遇到 '.' 就替换为 ' '
// 复杂度：时间复杂度 O(n)，空间复杂度 O(n)
function pathEncryption(path: string): string {
  let newStr = '';

  for (let i = 0; i < path.length; i++) {
    if (path[i] === '.') {
      newStr += ' ';
    } else {
      newStr += path[i];
    }
  }

  return newStr;
};