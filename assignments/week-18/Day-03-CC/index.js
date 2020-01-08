//Javascript function that takes a string and compresses it.

const frequency = arr => {
let array = [];


arr.forEach(element => (array[element]=array[element] ? array[element] +1 : 1))

return array;

}

let array = Array.from("AAAABBBDDGGGGG");

console.log(array);

let frequencyOfChars = frequency(array);

console.log(frequencyOfChars);

const joinArray = arr => {
   
    let str = " ";
    for(let key in arr) {
        arr[key] == 1 ? str += key : str += (key + arr[key])
    }

    return str;
}

console.log(joinArray(frequencyOfChars));