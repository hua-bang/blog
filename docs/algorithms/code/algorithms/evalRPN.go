// 思路：使用堆栈，然后遍历字符串，如果遇到数字，则将数字入栈，如果遇到运算符，则将栈顶两个元素出栈，然后将结果入栈，最后返回栈顶元素
// 复杂度分析：时间复杂度O(n)，空间复杂度O(n)

func compute(num1, num2 int, flag string) int {
	res := 0
	if flag == "+" {
		res = num1 + num2
	}

	if flag == "-" {
		res = num1 - num2
	}

	if flag == "*" {
		res = num1 * num2
	}

	if flag == "/" {
		res = num1 / num2
	}

	return res
}

func evalRPN(tokens []string) int {
	res := make([]int, 0)

	for _, token := range tokens {
		if token == "+" || token == "-" || token == "*" || token == "/" {
			num1 := res[len(res)-2]
			num2 := res[len(res)-1]
			nextNum := compute(num1, num2, token)
			res = res[:len(res)-2]
			res = append(res, nextNum)
		} else {
			num, err := strconv.Atoi(token)
			if err == nil {
				res = append(res, num)
			}
		}
	}

	return res[0]
}