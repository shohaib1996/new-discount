// function largestOfFour(arr) {
//     let largestArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let subArr = arr[i];

//         let largestArr = subArr[0];
//         for (let j = 0; j < subArr.length; j++) {
//             let myArr = subArr[j];
//             if (myArr > largestArr) {
//                 largestArr = myArr;
//             }
//         }
//         largestArr.push(largestArr);
//     }



//     return largestArr;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const names = users.map(user => user.name);
  const ages = users.map(user => user.age);
  console.log(names, ages);