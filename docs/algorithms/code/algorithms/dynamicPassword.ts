function dynamicPassword(password: string, target: number): string {
  let res = "";

  for (let i = target; i < password.length; i++) {
    res += password[i];
  }

  for (let i = 0; i < target; i++) {
    res += password[i];
  }

  return res;
}

function dynamicPassword(password: string, target: number): string {
  let res = "";

  for (let i = target; i < password.length; i++) {
    res += password[i];
  }

  for (let i = 0; i < target; i++) {
    res += password[i];
  }

  return res;
}
