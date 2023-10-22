function convertStr() {
    let conv = new String("I am Groot");
    console.log(typeof conv);
    console.log(conv);

    let convStr = conv.toString();
    console.log(typeof convStr);
    console.log(convStr);

    let convString = conv.valueOf();
    console.log(typeof convString);
    console.log(convString);
}

convertStr();

let myStr = "Groot learn in home learn";

function indexOf(x,y) {
    console.log(myStr.indexOf(x));
    console.log(myStr.indexOf(y));
}

indexOf("learn", "Groot");

function lastIndex(x,y) {
    console.log(myStr.lastIndexOf(x));
    console.log(myStr.lastIndexOf(x,y));
}

lastIndex("learn",12);

// Method Search conv RegEx result Index
function searchStr(x) {
    console.log(myStr.search(x));
}

searchStr("ear");

// Method Match conv RegEx result Array
function matchStr(x) {
    console.log(myStr.match(x));
}

matchStr("learn");