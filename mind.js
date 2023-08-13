function mindGame(num){
    if (typeof num !== "number" || num <= 0){
        return "Please a Positive number"
    } else{
        return (((num*3)+10)/2)-5;
    }
}
let result = mindGame(5);
console.log(result);