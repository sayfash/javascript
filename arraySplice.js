function callSplice(){
    let city = ["Jakarta", "Medan", "Malang", "Padang"];
    console.log(city);
    // city.splice(2, 0, "Palembang");
    city.splice(2,1);
    return city;
}

console.log(callSplice());