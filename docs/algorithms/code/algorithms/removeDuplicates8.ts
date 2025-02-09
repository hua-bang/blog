// 描述：给定一个字符串， 删除字符串中的所有相邻重复项
// 思路：使用堆栈，每次判断前面一个元素是否和当前相同，如果相同则删除，否则入栈
// 复杂度分析；时间复杂度：O(n)，空间复杂度：O(n)
function removeDuplicates(s: string): string {
  const stack: string[] = [];

  for(let i = 0; i < s.length; i++) {
    const curr = s[i];
    if(stack.length && curr === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(curr);
    }
  }

  return stack.join("");
};