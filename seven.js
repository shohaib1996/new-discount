function isLGSeven(num){
    if (typeof num !== "number"){
        return "please provide a number"
    }else{
        if (num - 7 < 7){
            return num - 7;
        }else {
            return num * 2;
        }
    }
}
let result = isLGSeven(15);
console.log(result);