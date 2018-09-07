const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log("Unable to connect mongodb server");
    }

    console.log("Connected to mongodb server");

    const db = client.db('TodoApp');

    var dbCollection = db.collection('Todos');

    dbCollection.find({completed : false}).toArray().then( (docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos ", err);
    });

    dbCollection.find({completed : true}).count().then ( (count) => {
        console.log(`count : ${count}`);
    }, (err) => {
        console.log('Unable to fetch data that its completed field true');
    });

    dbCollection.find().count().then ( (count) => {
        console.log(`count : ${count}`);
    }, (err) => {
        console.log('Unable to fetch data that its completed field true');
    });

    //client.close();

});