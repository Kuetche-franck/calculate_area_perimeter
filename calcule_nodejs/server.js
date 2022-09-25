// let http = require('http'); // require the HTTP object
// let fs = require('fs'); // require the File System object
// //create a server
// const server = http.createServer();
// server.on('request', (req, res)=>{
//     fs.readFile("./data.json","utf-8",(err,data)=>{
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         if(err)
//         {
//             console.log('an error occured');
//         }
//         else{
            
//             console.log(data);
//             res.end(data)
//         }
//     })
// });

// server.listen(8080);

let express = require('express');
let fs = require('fs');
let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/",(req, res)=>{
        fs.readFile("./data.json","utf-8",(err,data)=>{
            
            if(err)
            {
                console.log('an error occured');
            }
            else{
                
                console.log(data);
                res.end(data)
            }
        })
    })

    app.listen(8080);


