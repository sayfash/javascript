function callRegex(){
    let str ="abcdefghijklmnopqrstuvwxyz"
    return str.search(/k/);
}

console.log(callRegex());

let data = "Belajar Satu Tahun Bersama Niomic";

function callRegExp(x){
    console.log(x.test(data));
}

callRegExp(/Satu/);

function callRG(x){
    let str = new RegExp("Niomic");
    console.log(str.exec(x, "gi"));
}

callRG(data);

function callReplace(){
    let datas = "Belajar-Satu-Tahun-Bersama-Niomic"
    console.log(data.replace(/-/, ' '));
}

callReplace();

let s = "Ini Ibu Budi \n bukan Bapaknya.";
let re = /./g;
let res = /\./g;
console.log(s.match(re));
console.log(s.match(res));

let t = "abCD123 efg456 !@#$%^_'";

// Cari Angka
console.log(t.match(/\d/g));

// Cari Non Angka
console.log(t.match(/\D/g));

// Word Character
console.log(t.match(/\w/g));

// Non Word Character
console.log(t.match(/\W/g));

// Whitespace
console.log(t.match(/\s/g));

//Non Whitespace
console.log(t.match(/\S/g));

//Function ambil karakter ke array
function regArray(x, y){
    let result = x.match(y);
    console.log(result);
}

regArray(s, /[bu]/gi);