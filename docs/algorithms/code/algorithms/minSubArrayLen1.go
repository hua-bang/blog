
import "math"

func minSubArrayLen(target int, nums []int) int {
	n := len(nums)

	if n == 0 {
		return 0
	}

	min := math.MaxInt32
	left, right := 0, 0;
	sum := 0

	for right < n {
		sum += nums[right]

		for sum >= target {
			if min > right - left + 1 {
				min = right - left + 1;
			}
			sum = sum - nums[left];
			left++;
		}

		right++;
	}

	if min == math.MaxInt32 {
		return 0;
	}

	return min;
}