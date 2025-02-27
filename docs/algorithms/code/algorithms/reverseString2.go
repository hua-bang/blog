// 思路：采用双指针，从两端向中间遍历，交换元素
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1)
func reverseString(s []byte) {
	left, right := 0, len(s)-1

	for left < right {
		s[left], s[right] = s[right], s[left]
		left++
		right--
	}
}