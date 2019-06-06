function add(numbers) {
	if (numbers && numbers.length > 0) {
		let total = 0;

		let splitExp = new RegExp('[,(\n)]');
		if (numbers.length > 2) {
			if (isNaN(numbers[0]) && numbers[1] === '\n') {
				splitExp = new RegExp('[,(\n)'+numbers[0]+']');
				numbers = numbers.substring(2,numbers.length);
			}
		}

		let splitNumbers = numbers.split(splitExp);

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