/**
 * @param {number[]} password
 * @return {string}
 */
var crackPassword = function (password) {
  return password.sort((x, y) => `${x}${y}` - `${y}${x}`).join("");
};
