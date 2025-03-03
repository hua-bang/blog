// 思路：使用栈存储，遇到左括号入栈，遇到右括号出栈，判断是否匹配
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(n)
func isValid(s string) bool {
	hash := map[string]string{
		")": "(",
		"]": "[",
		"}": "{",
	}

	stack := []string{}

	for _, val := range s {
		if val == '(' || val == '[' || val == '{' {
			stack = append(stack, string(val))
		} else {
			if len(stack) == 0 {
				return false
			}
			v := stack[len(stack)-1]
			if hash[string(val)] == v {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		}
	}

	return len(stack) == 0
}