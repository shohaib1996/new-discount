function gemsToDiamond(x, y, z) {
    if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
        return "Please provide a number"
    } else if (x < 0 || y < 0 || z < 0) {
        return "Provide Positive number"
    } else {
        const firstFriend = 21;
        const secondFriend = 32;
        const thirdFriend = 43;
        let total = firstFriend * x + secondFriend * y + thirdFriend * z;
        if (total > 2000) {
            return total - 2000;
        } else {
            return total;
        }
    }


}
let result = gemsToDiamond(1, 2, 5);
console.log(result);
