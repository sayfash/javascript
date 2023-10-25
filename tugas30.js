let myStr = "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat";

function regex(x, y) {
    let result = x.match(y);
    console.log(result);
}

regex(myStr, /[es]/gi);