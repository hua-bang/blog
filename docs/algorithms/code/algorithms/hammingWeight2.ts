/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n: any) {
  let count = 0;

  for (let i = 0; i < 32; i++) {
    if (n & (1 << i)) {
      count++;
    }
  }

  return count;
};

var hammingWeight2 = function (n: number) {
  return new Array(32).fill(0).reduce((acc, curr, index) => {
    console.log(n, index, n & (1 << index));
    if (n & (1 << index)) {
      return acc + 1;
    }

    return acc;
  }, 0);
};

hammingWeight2(11);
