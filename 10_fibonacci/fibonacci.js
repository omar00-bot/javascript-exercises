const fibonacci = function(n) {
    const result = [0,1]
    if(n<0){
        return `OOPS`
    }
for (let i = 2; i <= n; i++) {
    const a = result[i-1];
    const b = result[i-2];
    result.push(a+b);
}
return result[n]
};

console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;