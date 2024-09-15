function dynamicPassword(password: string, target: number): string {
  let str = "";
  for (let i = target; i < password.length; i++) {
    str += password[i];
  }

  for (let i = 0; i < target; i++) {
    str += password[i];
  }

  return str;
}
