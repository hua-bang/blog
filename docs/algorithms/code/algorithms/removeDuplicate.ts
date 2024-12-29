function removeDuplicates(s: string): string {
  const stack: string[] = [];

  for (let char of s) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};