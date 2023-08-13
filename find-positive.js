const myArr = [1, 0 , 6, 8, 10, -8, 5, -7];

function findPositive(){
    let sortedArr = [];
    for (let number of myArr){
        if (number >= 0){
            sortedArr.push(number);
        }else {
            break;
        }
    }
    return sortedArr;
}


let sort = findPositive(myArr);
console.log(sort);