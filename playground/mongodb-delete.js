const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log("Unable to connect mongodb server");
    }

    console.log("Connected to mongodb server");

    const db = client.db('TodoApp');

    var dbCollection = db.collection('Todos');

    //delete many

    // dbCollection.deleteMany({text : 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // })

    //delete one

    // dbCollection.deleteOne({text : 'Write code'}).then((result) => {
    //     console.log(result);
    // })

    //find one and delete

    dbCollection.findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    })

    //client.close();

});