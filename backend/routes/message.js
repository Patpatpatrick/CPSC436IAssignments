var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var url = "mongodb+srv://cpsc436assignment_guoyang:lgy7080110107@cluster0-cfi2k.mongodb.net/assignment4?retryWrites=true&w=majority";
var ObjectId = require('mongodb').ObjectId;
// var db = initialize();

// var initialize = () => {
//   mongo.connect(url, (err, client) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     const database = client.db('assignment4');
//     return database;
//   })
// }


router.post('/addMessage',(req,res)=>{
    console.log(req.body);
    mongo.connect(url, (err, client) => {
        if (err) {
          console.error(err)
          return
        }
        const db = client.db('assignment4');
        const body = Object.assign({},req.body,{
            date: new Date()
        });
        db.collection('messages').insertOne(body);
        res.json({status:"succeeded!!!!!!!!"});
        client.close();
    })
});

router.get('/getMessages',(req,res)=>{
    mongo.connect(url, (err, client) => {
        if (err) {
          console.error(err)
          return
        }
        const db = client.db('assignment4');
        db.collection('messages').find().toArray((error,result) => {
            res.json(result);
            client.close();
        });
    })
});

router.delete('/del',(req,res) => {
    mongo.connect(url, (err, client) => {
        if (err) {
          console.error(err)
          return
        }
        const db = client.db('assignment4');
        db.collection('messages').deleteMany();
        res.json({status:"You delete all the messages"});
        client.close();
    })
});

router.get('/getMessages/:index',(req,res)=>{
    mongo.connect(url, (err, client) => {
        if (err) {
          console.error(err)
          return
        }
        const index = req.params.index;
        console.log('=====================');
        console.log(index);
        console.log('=====================');
        const db = client.db('assignment4');
        db.collection('messages').findOne({_id:ObjectId(index)})
            .then(result => {
                if(result) {
                    console.log(`Successfully found document: ${result}.`)
                } else {
                    console.log("No document matches the provided query.")
                }
                res.send(result);
                client.close();
            })
            .catch(err => console.error(`Failed to find document: ${err}`))  
        client.close();
    })
});

router.delete('/del/:index',(req,res) => {
    console.log('backend handling del by index');
    mongo.connect(url, (err, client) => {
        if (err) {
          console.error(err)
          return
        }
        const index = req.params.index;
        const db = client.db('assignment4');
        db.collection('messages').findOneAndDelete({_id:ObjectId(index)})
          .then(deletedDocument => {
            if(deletedDocument) {
              console.log(`Successfully deleted document that had the form: ${deletedDocument}.`)
              res.send({status:"You delete one message"});
            } else {
              console.log("No document matches the provided query.")
            }
          })
          .catch(err => console.error(`Failed to find and delete document: ${err}`));
        client.close();
    })
});

router.put('/changeMessage/:index',(req,res) => {
    console.log('receivddded');
    const body = Object.assign({},req.body,{
        date: new Date()
    });
    mongo.connect(url, (err, client) => {
        if (err) {
          console.error(err)
          return
        }
        const index = req.params.index;
        const db = client.db('assignment4');
        const update = {
            "$set": {
              "fromname": body.fromename,
              "toname": body.toname,
              "category": body.category,
              "textcontent": body.textcontent,
              "date": body.date
            }
          };
          const options = { returnNewDocument: true };

        db.collection('messages').findOneAndUpdate({_id:ObjectId(index)},update,options)
        .then(updatedDocument => {
            if(updatedDocument) {
              console.log(`Successfully updated document: ${updatedDocument}.`)
              res.json({status:"You change one message"});
            } else {
              console.log("No document matches the provided query.")
            }
          })
          .catch(err => console.error(`Failed to find and update document: ${err}`))
        client.close();
    })
    // console.log(body);
    // const toChangeIndex = req.params.index;
    // console.log(toChangeIndex);
    // messageArray.splice(toChangeIndex,1,body);
    // console.log(messageArray);
    // res.json({status:"You change the message of index "+ toChangeIndex});
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Expresees' });
});

module.exports = router;

