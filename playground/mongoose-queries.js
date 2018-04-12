const {ObjectID} = require ('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5acfc7baf77ec933794b5f0b';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo ',todo);
// })

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('Todo By ID ',todo);
// }).catch((e) => console.log(e));

var uid = '5acfc7baf77ec933794b5f0b';

User.findById(uid).then((user) => {
  if(!user){
    return console.log('unable to find user');
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch((e) => {
  console.log(e);
});
