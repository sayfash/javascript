let myArr = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

function callFilter(x){
    let filtered = x.filter(deret => {
        return deret > 15;
    });
    console.log(filtered);
}

callFilter(myArr);