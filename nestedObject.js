function nestedObject(){
    let student = {
        name: "Derek",
        GPA: {
            semester1: 3.5,
            semester2: 3.75,
            semester3: 4.00,
            semester4: 3.25
        }
    }
    console.log(student.GPA.semester2);
}

nestedObject();