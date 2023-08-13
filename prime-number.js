function isPrime(num) {
    for (let item of num) {
        if (item <= 1) {
            return false;
        } else {
            let primes = [];
            for (let i = 2; i < item; i++) {
                if (item % i === 0) {
                    return false;
                }
                primes.push(item);
            }
           return primes;
        }

    }
}
let number = [2, 5, 6, 7, 8, 9, 10];
let result = isPrime(number);
console.log(result);