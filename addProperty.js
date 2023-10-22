function callObject(){
    let mobil = {
        type: "Sedan",
        price: 200000000,
        color: "White",
    }

    mobil.year = [2002, 2003, 2004, 2005];
    console.log(mobil);
    console.log(mobil.year);
}

callObject();