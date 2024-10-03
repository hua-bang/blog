function reverseWords(s: string): string {
  s = s.trim();
  let res: string[] = [], index = 0;

  while(index < s.length) {
    let left = index;
    if(s[left] == " ") {
      index++;
      continue;
    } else {
      let right = index;
      while(right < s.length && s[right] !== " ") {
        right++;
      }
      res.unshift(
        s.slice(left, right)
      )
      index = right;
    }
  }

  return res.join(" ");  
};