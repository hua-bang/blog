// 思路：遍历字符串，每次从 i 开始，遍历 haystack 和 needle 字符串，如果相等，就继续遍历，否则就从 i + 1 开始遍历
// 时间复杂度: O(m*n)， 空间复杂度: O(1)
func strStr(haystack string, needle string) int {
	haystackLength, needleLength := len(haystack), len(needle)
	if haystackLength < needleLength {
		return -1
	}

	for i := 0; i <= haystackLength-needleLength; i++ {
		index1, index2 := i, 0
		for index1 < haystackLength && index2 < needleLength && haystack[index1] == needle[index2] {
			index1++
			index2++
		}

		if index2 >= needleLength {
			return i
		}
		continue
	}

	return -1
}