function callObject(){
    let myObject = {
        type: 'Animal',
        species: 'Cat',
        race: 'Sphinx'
    }

    console.log(myObject);
   
    myObject.race = "Anggora";
    console.log("Change race to " + myObject["race"]);
    console.log(myObject);
}

callObject();