function add(numbers) {
	if (numbers && numbers.length > 0) {
		let total = 0;
		let splitExp = new RegExp('[,(\n)]');

		let parsingConfig = { numbers, splitExp };
		({ numbers, splitExp } = findDelimiter(parsingConfig));

		let splitNumbers = numbers.split(splitExp);

		splitNumbers.forEach(number => {
			let parsedNumber = parseInt(number);

			if (parsedNumber < 0) {
				console.log(parsedNumber);
				throw 'negative not allowed';
			} else if (!isNaN(parsedNumber)) {
				total += parsedNumber;
			} else {
				console.error('Unknown input', number);
			}
		});
		
		return total;
	}
	return 0;
}

function findDelimiter(parsingConfig) {
	let { numbers, splitExp } = parsingConfig;
	if (numbers.length > 2) {
		if (isNaN(numbers[0]) && numbers[1] === '\n') {
			splitExp = new RegExp('[,(\n)'+numbers[0]+']');
			numbers = numbers.substring(2,numbers.length);
		}
	}
	return { numbers, splitExp };
}

module.exports = add;