function reverseWords(s: string): string {
  s = s.trim(); 
  if (!s.length) {
    return '';
  }

  let index = 0;
  const arr: string[] = [];

  while(index < s.length) {
    while(index < s.length && s[index] === ' ') {
      index++;
    }
    if(index >= s.length) {
      break;
    }

    let left = index,  right = index + 1;
    while(right < s.length && s[right] !== ' ') {
      right++;
    }
    
    arr.push(
      s.substring(left, right)
    );
    index = right;
  }

  return arr.join(" ");
}