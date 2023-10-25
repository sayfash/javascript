function callNumber(){
    let a = "9";
    let b = 3;
    let c = "13.78";
    let d = "9 naga";
    let e = "100.99 meter";

    hasil = Number(a) + b;
    console.log(hasil);

    console.log(parseInt(c));
    console.log(parseInt(d));
    console.log(parseInt(e));

    console.log(parseFloat(c));

    console.log(parseFloat(d));
}

callNumber();

// Function String
let num1 = 123;
let float1 = 98.70;
let str1 = "NIOMIC!";
let bool1 = true;

function callStr(){
    console.log(String(num1));
    console.log(String(float1));
    console.log(String(bool1));
}

callStr();