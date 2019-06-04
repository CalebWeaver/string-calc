function add(numbers) {
	if (numbers && numbers.length > 0) {
		let total = 0;
		let splitNumbers = numbers.split(',');

		splitNumbers.forEach(number => {
			let parsedNumber = parseInt(number);

			if (!isNaN(parsedNumber)) {
				total += parsedNumber;
			} else {
				console.error('Unknown input', number);
			}
		});
		
		return total;
	}
	return 0;
}

module.exports = add;