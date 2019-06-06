function add(numbers) {
	if (numbers && numbers.length > 0) {
		let total = 0;
		let splitExp = new RegExp(',|\n');

		let parsingConfig = { numbers, splitExp };
		({ numbers, splitExp } = findDelimiter(parsingConfig));

		let splitNumbers = numbers.split(splitExp);
		splitNumbers.forEach(number => {
			if (number < 0) {
				throw 'negative not allowed';
			} else if (!isNaN(number) && number <= 1000) {
				total += parseInt(number);
			} else if (isNaN(number)){
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
			splitExp = new RegExp(',|\n|'+escapeRegex(numbers[0]));
			numbers = numbers.substring(2,numbers.length);
		} else if (numbers[0] === '[' && numbers.includes(']')) {
			let delimiter = escapeRegex(numbers.substring(1, numbers.indexOf(']')));
			splitExp = new RegExp(',|\n|'+delimiter);
			numbers = numbers.substring(numbers.indexOf(']') + 2);
		}
	}
	return { numbers, splitExp };
}

function escapeRegex(unescapedRegex) {
    return unescapedRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

module.exports = add;