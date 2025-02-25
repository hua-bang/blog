func getSum(n int) int {
	sum := 0
	for n > 0 {
		digit := n % 10
		sum += digit * digit
		n = n / 10
	}
	return sum
}

func isHappy(n int) bool {
	seen := make(map[int]bool) // Use a map to track seen numbers

	for n != 1 {
		if seen[n] {
			return false // We've seen this number before, so it's a cycle
		}
		seen[n] = true
		n = getSum(n) // Get the sum of squares of digits
	}

	return true
}
