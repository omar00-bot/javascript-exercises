const reverseString = function(string) {
    let stringLength = string.length;
    console.log(stringLength);
    let newString = ``;
    let x = stringLength;
    for(let i=0; i<stringLength; i++){
        newString += string[x-1];
        x--;
    }
    return newString;
};

console.log(reverseString(`Hello`));

// Do not edit below this line
module.exports = reverseString;
