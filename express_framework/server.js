var express = require('express');
var todos = require('./todos');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

var getRandomId = function() {
  return Math.random()
    .toString(36)
    .substr(7);
};

var addTodo = function(type, description) {
  var newTodo = {
    id: getRandomId(),
    type: type,
    description: description,
  };

  todos.push(newTodo);
};

// Endpoints
// List of existing todos
app.get('/', function(req, res){
  res.send('<h1>Hello world !</h1>')
})

app.get('/todos', function(request, response) {
  response.json(todos);
});

app.get('/secret', function(req,res){
  res.send('secret !')
})

// Endpoints or Routes
// create a new todo
app.post('/todos', function(req, res) {
  // extract the content from the body
  var type = req.body.type;
  var description = req.body.description;

  addTodo(type, description);
  res.status(201).end();
});

app.listen(port, function() {
  console.log('Server is listening on port ' + port);
});
