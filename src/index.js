module.exports = function check(str, bracketsConfig) {
  // your solution
  const pairs = Object.fromEntries(bracketsConfig);
  const stack = [];
  for (const char of str) {
		if (pairs[stack.at(-1)] === char) {
      stack.pop();
    } else {
			stack.push(char);
    }
  }
	return stack.length === 0;
}
