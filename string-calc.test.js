const add = require('./string-calc');

test('given no input, should return 0', () => {
	expect(add()).toBe(0);
});

test('given empty string, should return 0', () => {
	expect(add("")).toBe(0);
});

test('given 1, should return 1', () => {
	expect(add("1")).toBe(1);
});