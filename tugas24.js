let myArr = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

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
}

sortRev(myArr);