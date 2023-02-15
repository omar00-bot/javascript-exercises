const sumAll = function(a,b) {
    let min, max;
    let sum = 0;
    console.log(typeof a);
    if (typeof a === 'number' && typeof b === 'number' && a>=0 && b>=0){ 
        if(a>b){
        min = b;
        max = a;
        }
        else{
        min = a;
        max = b;
        }
    }
    else {
        return `ERROR`;
    }
    for (let i=min; i<=max; i++){
        sum += i;
    }
    return sum;
};

console.log(sumAll(-10, 4));
// Do not edit below this line
module.exports = sumAll;
