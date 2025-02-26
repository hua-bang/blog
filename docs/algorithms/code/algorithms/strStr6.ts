// 思路：遍历字符串，每次从 i 开始，遍历 haystack 和 needle 字符串，如果相等，就继续遍历，否则就从 i + 1 开始遍历
// 时间复杂度: O(m*n)， 空间复杂度: O(1)
function strStr(haystack: string, needle: string): number {
  if (haystack.length < needle.length) {
    return -1;
  }  

  for(let i = 0; i < haystack.length; i++) {
    let index1 = i, index2 = 0;
    while(index1 < haystack.length && index2 < needle.length && haystack[index1] === needle[index2]) {
      index1++;
      index2++;
    }

    if(index2 >= needle.length) {
      return i;
    } else {
      continue;
    }
  }

  return -1;
};