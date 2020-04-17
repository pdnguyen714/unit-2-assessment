const Todo = require("../data/todos");

const index = (req, res) => {
  res.render("", { todo: Todo.todos });
};

const create = (req, res) => {
  Todo.todos.push(req.body);

  res.render("index", { todo: Todo.todos });
};

module.exports = { index, create };