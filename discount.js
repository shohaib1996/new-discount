function discountPrice(ticket){
    if (ticket <= 100){
        return ticket * 100;
    } else if (ticket <= 200){
        return (100 * 100) + (ticket - 100)*90;
    } else {
        return (100 * 100)+(100 * 90)+(ticket - 200)*70;
    }

}

let ticketPrice = discountPrice(220);
console.log(ticketPrice);