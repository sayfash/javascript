function codeAt(){
    let code = "I study at home";
    console.log(code.charCodeAt(1));
}

function codePoint(){
    console.log(String.fromCodePoint(0x2615, 0x2744, 0x2f40));
}

let niomic = "I Wanna Break Free!";

function changeCase(){
    console.log(niomic.toLowerCase());
    console.log(niomic.toUpperCase());
}

function charAts(){
    console.log(niomic.charAt(11));
}

codeAt();
codePoint();
changeCase();
charAts();
