const http = require('http');
var fs = require('fs')
const hostname = 'localhost';
const PORT = 8080;
var express = require('express');
var app = express();


// serve index.html for standard 8080 get request
// serve image with special get route

app.use(express.json());
app.use(express.static('client/dist'));



app.get('/image', (req, res) => {

  fs.readFile('./giannispix/giannis1.jpg', function(err, data) {
    if (err) {
      console.log(err)
    } else {
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});