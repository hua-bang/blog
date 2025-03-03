// 思路：采用堆栈，然后遍历字符串，如果栈顶元素和当前元素相同，则移除栈顶元素，否则将当前元素入栈
// 复杂度分析：时间复杂度O(n)，空间复杂度O(n)
import "strings"
func removeDuplicates(s string) string {
	if len(s) == 0 {
		return s
	}

	stack := []string{}

	for _, val := range s {
		if len(stack) == 0 || stack[len(stack) - 1] != string(val) {
			stack = append(stack, string(val))
		} else {
			// 移除最后一个元素
			stack = stack[:len(stack)-1]
		}
	}

	return strings.Join(stack, "");
}