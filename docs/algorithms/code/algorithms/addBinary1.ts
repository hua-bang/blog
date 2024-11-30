function addBinary(a: string, b: string): string {
  let needAddOne = false;
  let index1 = a.length - 1, index2 = b.length - 1;
  let str = '';

  let index = Math.max(index1, index2)

  while (index >= 0) {
    const sum = Number(a[index1] || 0) + Number(b[index2] || 0) + (needAddOne ? 1 : 0);
    const nextVal = sum % 2;
    str = `${nextVal}${str}`;
    needAddOne = sum >= 2;
    index1--;
    index2--;
    index--;
  }


  if (needAddOne) {
    str = `1${str}`;
  }

  return str;
};