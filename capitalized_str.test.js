const capitalized = require('./capitalized_str');
const capitalizedStr = require('./capitalized_str');

test ('capitalizedStr should be a function', () => {
  expect(capitalizedStr ("str").toThrow("STR"));
});

test ('capitalizedStr should capitalize the first letter of a string', () => {
  expect(() => capitalizedStr("500")).toThrow('parameter must be a string');
});