function callObject(){
    let student = {
        name: "Adi",
        age: 23,
        major: "Physics",
        semester: 2
    }
    for (let x in student){
        console.log(student[x]);
    }
}

callObject();