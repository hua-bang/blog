// 思路：使用四个边界指针模拟顺时针螺旋填充过程，每填充完一条边就收缩对应边界，直到填满整个矩阵
// 复杂度分析：时间复杂度 O(n^2), 空间复杂度 O(n^2)
func generateMatrix(n int) [][]int {
	arr := make([][]int, n)

	for i := 0; i < n; i++ {
		arr[i] = make([]int, n)
	}

	count, max := 1, n*n

	left, right, top, bottom := 0, n-1, 0, n-1

	for count <= max {
		for i := left; i <= right; i++ {
			arr[top][i] = count
			count++
		}
		top++

		for i := top; i <= bottom; i++ {
			arr[i][right] = count
			count++
		}
		right--

		for i := right; i >= left; i-- {
			arr[bottom][i] = count
			count++
		}
		bottom--

		for i := bottom; i >= top; i-- {
			arr[i][left] = count
			count++
		}
		left++
	}

	return arr
}