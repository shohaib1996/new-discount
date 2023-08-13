function paperRequirements(x, y, z){
    const paperForFirst =  100;
    const paperForSecond = 200;
    const paperForThird = 300;
    let book1 = paperForFirst * x;
    let book2 = paperForSecond * y;
    let book3 = paperForThird * z;
    let total = book1 + book2 + book3;
    return total;
}

let book = paperRequirements(2,1,5);

console.log(book);