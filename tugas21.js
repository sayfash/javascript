let myStr = "Saya belajar masak nasi goreng";

function replaceStr(){
    console.log(myStr);
    let newStr = myStr.replace("masak", "makan");
    return newStr;
}

console.log(replaceStr());