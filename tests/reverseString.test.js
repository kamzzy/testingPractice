const reverseString = require('../index');

test('reverse a given string', () => {
  const reverseString = (string) => {
    const reverse = string.split('').reverse('').join('');
   return reverse;
  }
  expect(reverseString('shoe')).toBe('eohs'); 
})
