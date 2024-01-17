// const http = require('http');
// const fs = require('fs');


// const server = http.createServer((req, res) => {
//    const url = req.url;
//    const method = req.method;


//    if(url === '/'){
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<html>')
//     res.write('<header><title>Form</title> </header>')
//     res.write('<body><form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">send</button> </form></body>')
//     res.write('</html>')
//     return res.end();
//    }
//    if(url === '/message' && method === 'POST'){
//     const body = [];
//       req.on('data', (chank) => {
//         body.push(chank);
//       })
//       req.on('end', () => {
//         const parsebody = Buffer.concat(body).toString();
//         const message = parsebody.split('=')[1];
//         fs.writeFileSync('message.txt', message);
//       })
//       res.statusCode = 302;
//       res.setHeader('Location', '/');
//       return res.end();
//    }


//     res.setHeader('Content-Type', 'text/html')
//     res.write('<html>')
//     res.write('<header><title>My first server </title> </header>')
//     res.write('<body> <h1>My name is rahul</h1> </body>')
//     res.write('</html>')
//     res.end();
// });

// server.listen(3000);

// const http = require('http')
// we dont need http as we have express


// const server = http.createServer(app)
// server.listen(3000);


const bodyParser = require('body-parser');
const express = require('express')
const app = express();

const adminrout = require('./router/adminrouts')
const shoprout = require('./router/shop')

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminrout);
app.use(shoprout);

app.use((req, res, next) => {
   res.status(404).send('<h2>Page not found</h2>');
})

app.listen(3000);