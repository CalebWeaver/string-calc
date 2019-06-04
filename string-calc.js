function add(numbers) {
	if (numbers && numbers.length > 0) {
		let total = 0;
		let splitNumbers = numbers.split(',');

		splitNumbers.forEach(number => total += parseInt(number));
		
		return total;
	}
	return 0;
}

module.exports = add;