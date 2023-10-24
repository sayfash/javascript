let myArr = ["Medan", "Jakarta", "Surakarta", "Malang", "Sragen",];

let number = [9, 120, 67, 45, 38, 45, 450, 76];

function callSort(x){
    console.log(x);
    console.log("-------------------------------------------------------");
    let city = x.sort();
    console.log(city);
}

function callSortn(x){
    console.log(x);
    console.log("-------------------------------------------------------");
    let city = x.sort((a, b) => {
        return a - b;
    });
    console.log(city);
}

callSort(myArr);
callSortn(number);