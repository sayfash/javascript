function codeAt(){
    let code = "I study at home";
    console.log(code.charCodeAt(1));
}

function codePoint(){
    console.log(String.fromCodePoint(0x2615, 0x2744, 0x2f40));
}

codeAt();
codePoint();
