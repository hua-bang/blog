function dynamicPassword(password: string, target: number): string {
  const n = password.length;

  let str = '', index = target, count = 0;

  while (count < n) {
    str += password[index];
    index = (index + 1) % n;
    count++;
  }

  return str;
};