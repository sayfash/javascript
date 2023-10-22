function hello(){
    return "Hello Friends!";
} 

function functionObject(){
    let myObject = {
        message: hello()
    }
    console.log(myObject.message);
}

functionObject();