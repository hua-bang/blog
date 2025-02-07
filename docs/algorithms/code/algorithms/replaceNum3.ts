// 概述：替换数字，将数字替换为 number
// 思路：遍历字符串，将数字替换为 number
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1)
const replaceNum = (str: string) => {
  let newStr: string = "";

  for(let i = 0; i < str.length; i++) {
    if(/0-9/.test(str[i])) {
      newStr += `number`;
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}