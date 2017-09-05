import {Todo} from './todo';
let express = require('express');
let app = express();

const todo = new Todo();
todo.ajouter('ga');
todo.ajouter('zo');

console.log(todo.lister());

todo.supprimer('ga');

console.log(todo.lister());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/todo.ts", function(req, resp) {
 
})

app.get("/todo.ts", function(req, resp) {
    console.log()
   })


app.listen(8080, function() {
    console.log('Example app listening on port8080!');
});



