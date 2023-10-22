let myStr = "\"Carpe Diem Quam Minimum Credula Postero\"";

function incStr(x) {
    console.log(myStr.includes(x));
}

incStr("Post");
incStr("post");
incStr("red");

function startEnd(x, y, z) {
    console.log(myStr.startsWith(x, z));
    console.log(myStr.endsWith(y));
}

startEnd("Diem","Postero",7);

function repeatStr(x) {
    console.log(myStr.repeat(x));
}

repeatStr(3);