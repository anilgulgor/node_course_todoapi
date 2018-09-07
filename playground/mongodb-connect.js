const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log("Unable to connect mongodb server");
    }

    console.log("Connected to mongodb server");

    const db = client.db('TodoApp');

    var x = db.collection('Todos');

    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     completed : false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo ', err);
    //     }
    //      console.log(JSON.stringify(result.ops, undefined,2));
    // });

    // x.insertOne({
    //     name : 'Anıl Gülgör',
    //     age : 26,
    //     location : 'İstanbul'
    // })

    


     client.close();



});