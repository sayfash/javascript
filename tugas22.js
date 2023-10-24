let myStr = "Saya ingin belajar bersama";

function callForEach(x){
    let myArr = x.split(" ");
    myArr.forEach(function(item, index){
        console.log("Item : " + item + " Index ke " + index);
    })
}

callForEach(myStr);