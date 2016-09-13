var toDo = require('./models/todo');

module.exports = function(app){
    //get all todos
    app.get('/api/todos', function(req, res){

        toDo.find(function(err, todos){

            if(err){
                res.send(err);
            }
            res.json(todos);
        });
    });
    //create a single todo
    app.post('/api/todos', function(req, res){

        toDo.create({
            text: req.body.text,
            done: false
        }, function(err, todo){
            if(err){
                res.send(err);
            }

            toDo.find(function(err, todos){
                if(err){
                    res.send(err);
                }
                res.json(todos);
            });
        });
    });

    app.delete('/api/todos/:todo_id', function(req, res){
        toDo.remove({
            _id: req.params.todo_id
        }, function(err, todo){
            if(err){
                res.send(err);
            }
            toDo.find(function(err, todos){
                if(err){
                    res.send(err);
                }
                res.json(todos);
            });
        });
    });

    //application
    app.get('*', function(req, res){
        res.sendfile('../public/index.html');
    });
}