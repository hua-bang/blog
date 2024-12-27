const replaceNum = (str: string) => {
  let s = '';

  for (let char of str) {
    if (/[0-9]/.test(char)) {
      s += 'number';
    } else {
      s += char;
    }
  }

  return s;
}