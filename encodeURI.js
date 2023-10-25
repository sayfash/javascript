let uri = "my test.asp?name=stale&car=saab";
let res = encodeURI(uri);

console.log(res);

let uries = decodeURI(res);

console.log(uries);