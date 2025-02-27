// 思路：从 i 开始，每次取 2k 个字符，如果这段范围的字符个数大于等于 k 个，那么就反转前 k 个字符，否则就反转全部字符
// 复杂度分析：时间复杂度O(n)， 空间复杂度为 O(1)
func reverseStr(s string, k int) string {
	arr := []rune(s)

	for i := 0; i < len(s); i += 2 * k {
		if i+k-1 < len(s) {
			reverseArr(arr, i, i+k-1)
		} else {
			reverseArr(arr, i, len(s)-1)
		}
	}

	return string(arr)
}

func reverseArr(s []rune, left int, right int) {
	for left < right {
		s[left], s[right] = s[right], s[left]
		left++
		right--
	}
}