const names = ['abul', 'babul', 'abul', 'babul', 'cabul', 'dabul', 'dabul', 'ebul'];

function removeDuplicate(arr){
    let unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (!unique.includes(name)){
            unique.push(name);
        }
        
    }
    return unique;
}

let uniqueName = removeDuplicate(names);
console.log(uniqueName);