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