function pathEncryption(path: string): string {
  let res = "";
  for (let i = 0; i < path.length; i++) {
    if (path[i] === ".") {
      res += " ";
    } else {
      res += path[i];
    }
  }

  return res;
}
