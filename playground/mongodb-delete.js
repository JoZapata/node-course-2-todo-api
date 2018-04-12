const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
  //   console.log(res)
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res)
  // });

  db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    console.log(res)
  });

  db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5ace704cdbed491ef09a5433')}).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
  })

  client.close();
});
