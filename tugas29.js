function regex() {
    let data = "Belajar menimba ilmu programming bersama Niomic";

    let regExp = new RegExp("bersama", "g")
    let result = regExp.exec(data);
    console.log(result);
}

regex();
