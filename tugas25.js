let myNum = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

function sortRev(x){
    console.log("Sebelumnya : " + x.join(", "));
    let ascArr = x.sort((a, b) => {
        return a - b;
    });
    console.log("Ascending : " + ascArr.join(", "));
    let descArr = x.sort((a,b) => {
        return b - a;
    });
    console.log("Descending : " + descArr.join(", "));
    let fil = x.filter(newArr => {
        return newArr > 10;
    });
    console.log("Filter > 10 : " + fil.join(", "));
}

sortRev(myNum);