let myArr = ["Jakarta", "Malang", "Medan", "Sragen", "Surakarta"];

// Join Function (Array to String)
function callJoin(){
    console.log(myArr);
    let city = myArr.join(", ");
    return city;
}

console.log(callJoin())

let myString = "I am groot and this is Sparta";

// Split Function (String to Array)
function callSplit(){
    console.log(myString);
    let answer = myString.split(" ");
    return answer;
}

console.log(callSplit());

// IndexOf Function
function indexOf(){
    console.log(myArr);
    let index = myArr.indexOf("Sragen");
    return index;
}

console.log(indexOf());