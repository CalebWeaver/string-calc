function add(numbers) {
	if (numbers && numbers.length > 0) {
		return parseInt(numbers);
	}
	return 0;
}

module.exports = add;