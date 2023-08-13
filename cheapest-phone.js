const phones = [
    { name: 'Samsung', camera: 12, price: 20000 },
    { name: 'LG', camera: 52, price: 40000 },
    { name: 'Pixel', camera: 24, price: 24000 },
    { name: 'MI', camera: 16, price: 18000 },
    { name: 'Iphone', camera: 12, price: 100000 }
]

function cheapestPhone(phone) {
    let cheapest = phones[0].price;
    for (let i = 0; i < phones.length; i++) {

        let phone = phones[i].price;
        if (phone < cheapest) {
            cheapest = phone;
        }

    }
    return cheapest;
}

let cheapest = cheapestPhone(phones);
console.log(cheapest);