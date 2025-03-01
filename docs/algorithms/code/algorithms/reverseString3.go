// 思路：使用双指针，一个在头，一个在尾，当两个指针相遇时，结束循环
// 复杂度分析：时间复杂度O(n)，空间复杂度O(1)
func reverseString(s []byte)  {
	left, right := 0, len(s) - 1
	
	for left < right {
		s[left], s[right] = s[right], s[left]
		left++;
		right--;
	}
}