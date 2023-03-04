const palindromes = function (str) {
 const regex = /[^A-Za-z]/g;
 const sanitizedStr = str.replace(regex, '').toLowerCase(); 
 const reversedStr = sanitizedStr.split(``).reverse().join(``);
 return sanitizedStr === reversedStr;
};

console.log(palindromes('racecar'))

// Do not edit below this line
module.exports = palindromes;
