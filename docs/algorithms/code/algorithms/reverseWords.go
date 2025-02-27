// 思路：指针遍历，每次取 left 到 right 之间的字符串(左开右闭)，插入到数组的头部，指针指向 right
// 复杂度分析： 时间复杂度 O(n) 空间复杂度 O(n)
import "strings"

func reverseWords(s string) string {
	s = strings.TrimSpace(s) // 去除首尾空格
	n := len(s)
	arr := []string{}

	index := 0

	for index < n {
		for index < n && s[index] == ' ' {
			index++
		}

		if index >= n {
			break
		}

		start, end := index, index
		for end < n && s[end] != ' ' {
			end++
		}

		arr = append([]string{s[start:end]}, arr...)
		index = end
	}

	return strings.Join(arr, " ")
}