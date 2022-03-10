const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log('request made');

    //answer the browser
    //set header content type as text
    // res.setHeader('content-type', 'text/plain');
    // res.write('hello ninjas')


    //set header content type as html
    // res.setHeader('content-type', 'text/html');
    // res.write('<h1>hello ninjas</h1>')

    //send html file
    res.setHeader('Content-type', 'text/html')
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(3002, 'localhost', () => {
    console.log('listening for requests on port 3002');
})