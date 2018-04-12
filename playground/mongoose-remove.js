const {ObjectID} = require ('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((res) => {
  console.log(res);
});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove


Todo.findByIdAndRemove('5acfdc64e1c62723d1e25b44').then((doc) => {
  console.log(doc)
});
