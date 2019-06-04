const add = require('./string-calc');

test('no input is given, should return 0', () => {
	expect(add()).toBe(0);
});