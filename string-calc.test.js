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

test('given 1 and 2, should return 3', () => {
	expect(add("1,2")).toBe(3);
});

test('given NaN, should return 0', () => {
	expect(add("Dolphinately not a number")).toBe(0);
});

test('given 1, 2, 3, and 15, should return 21', () => {
	expect(add("1,2,3,15")).toBe(21);
});

test('given 1, 2, 3, and 15 with newline separator, should return 21', () => {
	expect(add("1,2,3\n15")).toBe(21);
});

test('given the first line has a delimiter, should return 35', () => {
	expect(add("%\n1%2,17\n15")).toBe(35);
});

test('given the first line has a delimiter, should return 35', () => {
	expect(add("%\n1%2,17\n15")).toBe(35);
});

test('given 1, 2, and -3, should throw exception', () => {
	expect(() => add("1,2,-3")).toThrow('negative not allowed');
});