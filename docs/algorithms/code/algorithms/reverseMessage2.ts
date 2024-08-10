function reverseMessage(message: string): string {
  message = message.trim();

  let index = 0;
  let arr: string[] = [];

  while (index < message.length) {
    let left = index,
      right = left;
    if (message[left] !== " ") {
      while (message[right] !== " " && right < message.length) {
        right++;
      }
      const val = message.slice(left, right);
      arr.unshift(val);
      index = right;
    } else {
      while (message[right] === " " && right < message.length) {
        right++;
      }
      index = right;
    }
  }

  return arr.join(" ");
}

console.log(reverseMessage("the sky is blue"));
