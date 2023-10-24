let myStu = [
    {
        name: "Andi",
        gender: "male"
    },
    {
        name: "Siti",
        gender: "female"
    },
    {
        name: "Cindy",
        gender: "female"
    },
    {
        name: "Indargo",
        gender: "male"
    }
];

function callFilter(){
    let female = myStu.filter(function(student){
        return student.gender === "female";
    });
    console.log(female);
    let male = myStu.filter(students => {
        return students.gender === "male";
    });
    console.log(male);
}

callFilter();

function callEvery(){
    let female = myStu.every(student => {
        return student.gender === "female";
    });
    console.log(female);
}

callEvery();

// Some Funciton (Criteria Checking)
function callSome(){
    let maleCheck = myStu.some(student => {
        return student.gender === "male";
    });
    console.log(maleCheck);
}

callSome();
