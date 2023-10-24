let myArr = [5, 12, 8, 44, 120];

let found = myArr.find(element => {
    return element > 10;
});

console.log(found);

let foundIndex = myArr.findIndex(elements => {
    return elements > 100;
});

console.log(foundIndex);

let reducer = myArr.reduce((total, number) => {
    return total - number;
});

console.log(reducer);

let recuRight = myArr.reduceRight((total, number) => {
    return total - number;
});

console.log(recuRight);