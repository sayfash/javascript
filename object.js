function callObject(){
    let mobil = {
        type: "Sedan",
        price: 200000000,
        color: "White",
        year: [2001, 2002, 2003, 2004]
    }

    console.log(mobil);
    console.log(mobil.price);
    console.log(mobil.year[0]);
}

callObject();