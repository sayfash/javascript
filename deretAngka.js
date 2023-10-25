function deretAngka(n){
    let myArr = [];
    for (i = 1; i <= n; i++) {
        if (i%3 === 0) {
            myArr.push("NIO");
        } else if (i%5 === 0) {
            myArr.push("MIC");
        } else {
            myArr.push(i);
        }
    }
    let result = myArr.join(" ");
    return result;
}

console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))