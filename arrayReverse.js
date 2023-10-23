let myArr = ["Jakarta", "Malang", "Medan", "Sragen", "Surakarta"];

 function callReverse() {
    console.log(myArr);
    let result = myArr.reverse();
    return result;
 }

 console.log(callReverse());

 let ourArr = ["Palembang", "Surabaya", "Bandung", "Madiun"];

 function concatArr(){
    let result = myArr.concat(ourArr);
    return result;
 }

 console.log(concatArr());

 function sliceArr(){
    let newArr = myArr.slice(2, 5);
    return newArr;
 }

 console.log(sliceArr());