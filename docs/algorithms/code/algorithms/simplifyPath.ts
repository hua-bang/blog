function simplifyPath(path: string): string {
  const stack: string[] = [];

  let index = 1;

  while (index < path.length) {
    const startIndex = index;
    if (path[startIndex] === "/") {
      index++;
      continue;
    }
    while (index < path.length && path[index] !== "/") {
      index++;
    }
    const str = path.slice(startIndex, index);

    if (str === "..") {
      stack.pop();
    } else if (str !== ".") {
      stack.push(str);
    }
  }

  return `/${stack.join("/")}`;
}

console.log(simplifyPath("/.../a/../b/c/../d/./"));

function simplifyPath(path: string): string {
  const stack: string[] = [];
  const names = path.split("/");

  for (const name of names) {
    if (name === "..") {
      stack.pop();
    } else if (name.length && name !== ".") {
      stack.push(name);
    }
  }

  return `/${stack.join("/")}`;
}
