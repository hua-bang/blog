

const replaceNumber = (s: string) => {
  return [...s].map(item => {
    if (/[0-9]/.test(item)) {
      return "number";
    }

    return item
  }).join("");
}