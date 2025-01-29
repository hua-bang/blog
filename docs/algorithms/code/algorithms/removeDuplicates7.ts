function removeDuplicates(s: string): string {
  const res: string[] = [];
  for(let i = 0; i < s.length; i++) {
    if(res.length && s[i] === res[res.length - 1]) {
      res.pop();
    } else {
      res.push(s[i]);
    }
  }

  return res.join("");  
};