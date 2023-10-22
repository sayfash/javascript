let tinggiBudi = 177;
let tinggiSalim = 180;
let tinggiSalma = 155;

function compareTinggi(){
    if (tinggiBudi > tinggiSalim && tinggiBudi > tinggiSalma){
        if (tinggiSalim > tinggiSalma){
            return "Urutan dari yang Tertinggi: Budi, Salim, Salma";
        } else {
            return "Urutan dari yang Tertinggi: Budi, Salma, Salim"
        }
    } else if (tinggiSalim > tinggiBudi && tinggiSalim > tinggiSalma){
        if (tinggiBudi > tinggiSalma){
            return "Urutan dari yang Tertinggi: Salim, Budi, Salma";
        } else {
            return "Urutan dari yang Tertinggi: Salim, Salma, Budi";
        }
    } else {
        if (tinggiSalim > tinggiBudi){
            return "Urutan dari yang Tertinggi: Salma, Salim, Budi";
        } else {
            return "Urutan dari yang Tertinggi: Salma, Budi, Salim"
        }
    }
}

console.log(compareTinggi());