let ab = 8;
let bc = 6;

function hypotenusa(x, y){
    let hypo = Math.pow(x, 2) + Math.pow(y, 2);
    let result = Math.sqrt(hypo);
    return result;
}

console.log("Nilai AB : " + ab);
console.log("Nilai BC : " + bc);
console.log("Panjang sisi AC pada segitiga siku-siku tersebut adalah : " + hypotenusa(ab, bc) + " cm");
