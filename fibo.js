// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// function fibonacci(n) {
//     const fibSeq = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
//     }
//     return fibSeq;
// }

// console.log(fibonacci(10));

// let i = 7;
// console.log(i);
// while (i < 19){
//     i += 2;
//     console.log(i);
// }

// let arr = [50, 70, 84, 60, 89, 104, 55, 87, 80];

// for (let i of arr){
//     if (i >= 80){
//         console.log(i);
//         continue;
//     }
// }

let obj = {
    name : "max",
    age : 10,
    friends : ["monty", "mini"]
};
obj.age = 11;
obj.friends[1] = "tom";
let friendsOfObj = obj.friends[1];
console.log(friendsOfObj);
console.log(obj);
