const friends = ["alexander", "lucius Malfoooy", "harry potter", "voldemort tom"];


function bestFriend(friend){
    let largestFriend = "";
    for (let item of friends){
        if (item.length > largestFriend.length){
            largestFriend = item;
        }
    }
    return largestFriend;
}
let myBestFriend = bestFriend(friends);
console.log(myBestFriend);