function computed(n: number) {
  return [...(n + '')].reduce((acc, curr) => acc + Number(curr) * Number(curr), 0);
}

function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;

  while (true) {
    slow = computed(slow);
    fast = computed(fast);
    fast = computed(fast);

    if (slow === 1 || fast === 1) {
      return true;
    }

    if (slow === fast) {
      return false;
    }
  }

  return false;
};