var http = require('http');

// Requiring the built-in file system module
var fs = require('fs');

// Getting the todos from todos.js
var todos = require('./todos');

// Set the port of the web server
// process.env.PORT is for Production environment
var port = process.env.PORT || 3000;

// Generate a random id
var randomId = function() {
  return Math.random()
    .toString(36)
    .substring(7);
};

// add an id to the new todo obj and push it onto the list
// of todos
var addTodo = function(todoObj) {
  // adding the random id to todoObj
  todoObj.id = randomId();
  todos.push(todoObj);
};

// Create a Web Server Object
var app = http.createServer(function(req, res) {
  // Request Method
  // console.log('Method: ', req.method);
  // The path that has benn entered in the browser
  // console.log('Path: ', req.url);
  // Headers part of the request
  // console.log('Headers', req.headers);

  // get the method of the request
  // either get, post
  var method = req.method;

  // Store the path of the url that was entered in the browser
  var path = req.url;

  switch (method) {
    case 'GET':
      if (path === '/') {
        // display index.html

        // To read a file with nodejs we need to create a stream
        var filename = __dirname + '/index.html';
        console.log('filename:', filename);

        // Creating the stream
        var readStream = fs.createReadStream(filename);

        // When the stream is open we send the file to res
        readStream.on('open', function() {
          readStream.pipe(res);
        });

        // whenever there is an error reading the file
        readStream.on('error', function(err) {
          res.end(err);
        });
      } else if (path === '/todos') {
        // display list of todos
        res.statusCode = 200;
        // write is going to send an output to the client
        res.write(JSON.stringify(todos));
        res.end();
      }

      break;
    case 'POST':
      // Get the content a new todo
      // add the new todo to the list of todos

      let body = '';

      // with node we need to buffer the body received from the
      // request
      req.on('data', function(chunck) {
        body += chunck;
      });

      // When all the chunks have been received
      req.on('end', function() {
        var newTodo = JSON.parse(body);

        // adding the todo
        addTodo(newTodo);

        res.statusCode = 201;
        res.end();
      });

      break;
    default:
      console.log('Unknown Method.');
  }
});

// Running the Web server. Listen for connection on port 3000
app.listen(port, function() {
  console.log('Server listening on port: ' + port);
});
