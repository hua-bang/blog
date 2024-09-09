function fizzBuzz(n: number): string[] {
  return new Array(n).fill(0).map((item, i) => {
    const index = i + 1;
    if (index % 3 === 0 && index % 5 === 0) {
      return "FizzBuzz";
    }
    if (index % 3 === 0) {
      return "Fizz";
    }
    if (index % 5 === 0) {
      return "Buzz";
    }

    return String(index);
  });
}
