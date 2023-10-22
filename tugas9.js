function callObject(){
    let myObject = {
        OS: "Linux",
        Distribution: "Debian",
        architecture: "x64",
        bit: 64,
        repo: {
            stable: "Bookworm",
            unstable: "Buster"
        }
    }
    console.log(myObject);

    for (let x in myObject){
        console.log(myObject[x]);
    }
}

callObject();