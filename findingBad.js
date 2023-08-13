let myArr = [1,2,3]
function findingBadData(arr){
    if (!Array.isArray(arr)){
        return "Provide an Array";
    }
    let badData = 0;
    for (let num of arr){
        if (num < 0){
            badData++;
        }
    }
    return badData;

}
let badData = findingBadData(myArr);
console.log(badData);