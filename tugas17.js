let myString = "Saya beLajar bahaSa peMrograman deNgan khUsuk.";
let myText = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.";

function changeCase(){
    console.log(myString.toLowerCase());
    console.log(myString.toUpperCase());
    console.log(myText.toLowerCase());
    console.log(myText.toUpperCase());
}

changeCase();

let myPar = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

function myChar(){
    let a = myPar.charCodeAt(0);
    let b = myPar.charCodeAt(1);
    let c = myPar.charCodeAt(2);
    let d = myPar.charCodeAt(3);
    let e = myPar.charCodeAt(4);
    let f = myPar.charCodeAt(5);
    console.log(a + " - " + b + " - " + c + " - " + d + " - " + e + " - " + f);
}

myChar();

function myChars(){
    let myArr = [];
    for (i = 0; i < 6; i++){
        myArr.push(myPar.charCodeAt(i));
    }
    console.log(myArr[0] + " - " + myArr[1] + " - " + myArr[2] + " - " + myArr[3] + " - " + myArr[4] + " - " + myArr[5]);
}

myChars();