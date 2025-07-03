function pathEncryption(path: string): string {
  let newStr = '';

  for (let i = 0; i < path.length; i++) {
    newStr += path[i] === '.' ? ' ' : path[i];
  }

  return newStr;
};