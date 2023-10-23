let data = ["a", "b", "c", "e", "p", "o"];

function callForEach(){
    data.forEach(function(items, index, array){
        console.log(items);
        console.log(index);
    })    
}

callForEach();

let myArr = ["Jakarta", "Malang", "Medan", "Sragen", "Surakarta"];

// Map Function
function callMap(){
    myArr.map((item, index, array) => {
        console.log(item);
        console.log(index);
        console.log(array);
    });
}

callMap();