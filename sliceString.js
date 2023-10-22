let sentence = "\"Carpe Diem Quam Minimum Credula Postero\"";

function subString() {
    console.log(sentence.substr(7,17));
    console.log(sentence.substring(7, 24));
}

subString();

function sliceStr() {
    console.log(sentence.slice(7,24));
}

sliceStr();

function splitStr() {
    console.log(sentence.split(" ", 6));
}

splitStr();

function trimStr() {
    console.log(sentence.trim());
}

trimStr();

function concatStr() {
    console.log(sentence.concat(" - Horace"));
}

concatStr();