const removeFromArray = function() {
    let argumentLength = arguments.length;
    const result = [];
    const arg0 = arguments[0];
    
    console.log(argumentLength);
    console.log(arg0);
    
    for (let i=1; i<argumentLength; i++){
        let deleteLength = 1;
        const searchForString = arguments[argumentLength-i];
        const indexToDelete = arg0.indexOf(searchForString);
        console.log(indexToDelete);
        if (indexToDelete === -1){
            deleteLength = 0;
        }
        const result = arg0.splice(indexToDelete,deleteLength);
    }
    return arg0;
};

console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
// Do not edit below this line
module.exports = removeFromArray;
