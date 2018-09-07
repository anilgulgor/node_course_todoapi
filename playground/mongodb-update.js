const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log("Unable to connect mongodb server");
    }

    console.log("Connected to mongodb server");

    const db = client.db('TodoApp');

    var dbCollection = db.collection('Todos');

    dbCollection.findOneAndUpdate(
        {
            text : "Go swim"
        }, 
        {
            $set : {

                text : "Go swim Done",
                completed : true

            }
        }, 
        {
            returnOriginal : false
        }
    
    ).then( (result) => {

        console.log(result);

    })

    //client.close();

});