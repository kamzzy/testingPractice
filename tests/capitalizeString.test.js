const capitalizeString = require('../index');

test ('capitalize first char of a string', () => {
  const capitalizeString = (string) => {
    const str = string;
    const capitalize= str.charAt(0).toUpperCase() + str.slice(1);
    return capitalize
  }
  expect(capitalizeString('sugar')).toBe('Sugar');
}) 
