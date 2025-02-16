func removeElement(nums []int, target int) int {
	count := 0;

	for _, v := range nums {
		if v != target {
			nums[count] = v;
			count++;
		}
	}

	return count;
}