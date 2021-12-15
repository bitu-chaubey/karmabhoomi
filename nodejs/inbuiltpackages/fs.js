fs = require('fs');
//fs.writeFileSync("sample.txt", "Node is awesome.But synch functions block");
//console.log("Created a file");
//console.log("END");
/*
fs.writeFile("sample.txt","Node is awesome. Async is good", (err) => {
    if(err) throw err;
    console.log("Created a file");

});
console.log("END");

fs.appendFile("sample.txt","More data appended", (err) => {
    if(err) throw err;
    console.log("Created a file");

});
console.log("END");



fs.rename("sample.txt","demo.txt", (err) => {
    if(err) throw err;
    console.log("Created a file");

});
console.log("END");


fs.readFile("demo.txt","utf8", (err,data) => {
    if(err) throw err;
    console.log(data);

});
*/

fs.unlink("demo.txt",(err) => {
    if(err) throw err;
    console.log("file deleted");

});