function addBinary(a: string, b: string): string {
  const aLength = a.length;
  const bLength = b.length;

  const length = Math.max(aLength, bLength);
  const res: number[] = [];

  let plusNum = 0;

  const astr = [...a].reverse().join("");
  const bstr = [...b].reverse().join("");

  for (let i = 0; i <= length - 1; i++) {
    let anum = Number(astr[i] || 0);
    let bnum = Number(bstr[i] || 0);
    let item = anum + bnum + plusNum;

    if (item >= 2) {
      plusNum = 1;
    } else {
      plusNum = 0;
    }
    item = item % 2;
    res[i] = item;
  }

  if (plusNum === 1) {
    res.push(plusNum);
  }

  return res.reverse().join("");
}

function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (j >= 0 || i >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = digitA + digitB + carry;

    result = (sum % 2) + result;

    carry = Math.floor(sum / 2);
    j--;
    i--;
  }

  return result;
}
