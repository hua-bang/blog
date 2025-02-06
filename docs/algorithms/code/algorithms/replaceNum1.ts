// 思路：根据遍历的元素，判断是否是数字，如果是数字，就替换成number
// 复杂度分析：时间复杂度O(n)，空间复杂度O(n)
const replaceNum = (str: string) => {
  if(!str.length) {
    return "";
  }

  return [...str].map(word => {
    if (/[0-9]/.test(word)) {
      return "number";
    }
    return word;
  }).join("");
}