const stringLength = require('../index');

test('get string length', () => {
  const stringLength = (food) => {
    return food.length;
  };
  expect(stringLength('food')).toBe(4);
  expect (stringLength('success')).toBe(7);
});

test('get string if length is grater than 0 and less than 10', () => {
  const stringLength = (food) => {
    const length = food.length;
    if(length >0 && length <= 10) {
      return length;
    }
  };
  expect(stringLength('food')).toBe(4);
  expect(stringLength('successfood')).toBe(undefined)
});
