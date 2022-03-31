const stringLength = require('./stringLength');

test ('stringLength should be a function', () => {
  expect(stringLength('hello')).toBe(5);
});

test ('stringLength should throw an error if the string is less than 1 or greater than 10', () => {
  expect(() => stringLength("")).toThrow('String\'s length should be between 1 and 10');
});