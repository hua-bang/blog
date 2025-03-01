// 思路：每次选取一个单词，选择单词过程采用双指针，每次选取一个单词后，将单词插入到结果数组的头部
// 复杂度分析：时间复杂度O(n)，空间复杂度O(n)
import (
	"strings"
)
func reverseWords(s string) string {
	s = strings.TrimSpace(s)
	index, n := 0, len(s)
	res := []string{};

	
	for index < n {
		for index < n && s[index] == ' ' {
			index++
		}
		if index >= n {
			break
		}

		start, end := index, index
		for end < n && s[end] != ' ' {
			end++;
		}

		res = append([]string{s[start:end]}, res...)
		index = end
	}

	return strings.Join(res, " ")
}