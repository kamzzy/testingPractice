
const stringLength = (string) => {
   let str = [...string].length;
   if (str > 0 && str <= 10) {
      return str;
   }
}

const reverseString = (string) => {
   const reverse = string.split('').reverse('').join('');
   return reverse;
}

const capitalizeString = (string) => {
   const str = string;
   const capitalize= str.charAt(0).toUpperCase() + str.slice(1);
   return capitalize
 }

module.exports = {stringLength, reverseString, capitalizeString};