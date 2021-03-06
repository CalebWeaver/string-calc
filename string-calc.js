function add(numbers) {
	
	if (numbers && numbers.length > 0) {
		let total = 0;
		let splitExp = createSplitRegex();

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

function createSplitRegex(delimiter) {

	let splitExpLiteral = ',|\n';

	if (Array.isArray(delimiter)) {
		delimiter = delimiter.join('|');
	}
	if (delimiter) {
		splitExpLiteral += '|' + delimiter;
	}

	return new RegExp(splitExpLiteral);
}

function findDelimiter(parsingConfig) {

	let { numbers, splitExp } = parsingConfig;

	if (numbers.length > 2) {
		if (hasSingleCustomDelimiter(numbers)) {
			splitExp = createSplitRegex(escapeRegex(numbers[0]));
			numbers = numbers.substring(2,numbers.length);
		} else if (hasLongCustomDelimiter(numbers)) {
			let delimiter = getComplexDelimiters(numbers);
			splitExp = createSplitRegex(delimiter);
			numbers = numbers.substring(numbers.lastIndexOf(']') + 2);
		}
	}

	return { numbers, splitExp };
}

function hasSingleCustomDelimiter(numbers) {
	return isNaN(numbers[0]) && numbers[1] === '\n';
}

function hasLongCustomDelimiter(numbers) {
	return numbers[0] === '[' && numbers.includes(']');
}

function getComplexDelimiters(numbers) {

	let delimiters = [];

	while (numbers.indexOf(']') > -1) {
		delimiters.push(escapeRegex(numbers.substring(1, numbers.indexOf(']'))));
		numbers = numbers.substring(numbers.indexOf(']') + 1);
	}

	return delimiters;
}

function escapeRegex(unescapedRegex) {
    return unescapedRegex.replace(/[-\/\\^$*+?.()|[\]{}]/, '\\$&');
}

module.exports = add;