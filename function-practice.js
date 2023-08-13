// function hourToMinutes(hour){
//     let minutes = hour * 60;

//     return minutes;  
// }

// let result = hourToMinutes(5);
// console.log(result);

// leap year practice

// let leapYearArr = [2023, 2024, 2025, 2028, 2029, 2100, 1900, 1200, 1600, 2000];

// function findLeapYear (year){
//     let leapYear = [];
//     for (let years of year){
//         if ((years % 4 === 0 && years % 100 !== 0) || (years % 400 === 0)) {
//             leapYear.push(years)
//         }
//     }
//     return leapYear;
// }
// let result = findLeapYear(leapYearArr);
// console.log(result);

// smallest number in an Array
// let numArr = [5, 6, 7, 9, 3,];

// function smallestNum(arr){
//     let minNum = arr[0];
    // for (let i = 1; i < arr.length; i++){
    //     if (arr[i] < minNum){
    //         minNum = arr[i];
    //     }
    // }
    // for (let num of arr){
    //     if (num < minNum){
    //         minNum = num;
    //     }
    // }
//     for (let n in arr){
//         if (arr[n] < minNum){
//             minNum = arr[n];
//         }
//     }
//     return minNum;
// }
// let result = smallestNum(numArr);
// console.log(result);

// smallest in three number

// let num1 = 50;
// let num2 = 60;
// let num3 = 45;

// // console.log(Math.min(num1, num2, num3));
// if (num1 < num2 && num1 < num3){
//     console.log("smallest num is :", num1);
// } else if (num2 < num1 && num2 < num3){
//     console.log("smallest num is :", num2);
// } else {
//     console.log("smallest num is :", num3);
// }

// Average of an array
// let numArr = [5, 6, 7, 9, 3];

// function averageOfArr (arr){
//     let sum = 0;
//     for (let n of arr){
//         sum += n;
//     }
//     let avg = sum / arr.length;
//     return avg;
// }
// let result = averageOfArr(numArr);
// console.log(result); 
// area of a ractangle

// function areaOfRactangle(l, w){
//     let area = l * w;
//     return area;
// }
// let result = areaOfRactangle(20, 30);
// console.log(result);
// second largest 
let numArr = [5, 6, 7, 9, 3];

function secondLargestNum(arr){
    let largest = arr[0];
    let secondLargest = arr[1];
    if (secondLargest > largest){
        [largest , secondLargest] = [secondLargest, largest];
    }
    for (let i = 2; i < arr.length; i++){
        if (arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if (arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
        
    }
    return secondLargest;
}
let result = secondLargestNum(numArr);
console.log(result);
