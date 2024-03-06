

const fs = require("fs");
console.log("im working")

// fs.writeFile('message.txt', 'Hello Node.js', 'utf8',(err)=>{
//     if(err) throw err;
//     console.log('message saved in file successfully');
// });


fs.readFile('./message.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})
