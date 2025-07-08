// 思路：指针索引
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(n) 因为需要一个新字符串来存储结果
function reverseMessage(message: string): string {
  message = message.trim();

  const n = message.length;
  let newStr = '', index = 0;

  while (index < n) {
    let word = '';
    while (index < n && message[index] !== ' ') {
      word += message[index];
      index++;
    }

    while (index < n && message[index] === ' ') {
      index++;
    }
    if (!newStr) {
      newStr = word;
    } else {
      newStr = `${word} ${newStr}`;
    }
  }

  return newStr;
};