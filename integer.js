function isInteger(num){
    if (typeof num !== "number"){
        return "provide a number"
    }

    if (num % 1 === 0){
        return true;
    }else {
        return false;
    }
}
let number = isInteger(6);
console.log(number);
