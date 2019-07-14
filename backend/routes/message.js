var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var url = "mongodb+srv://cpsc436assignment_guoyang:lgy7080110107@cluster0-cfi2k.mongodb.net/assignment4?retryWrites=true&w=majority";
var db;
mongo.connect(url,{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  db = client.db('assignment4');
});

var ObjectId = require('mongodb').ObjectId;

router.post('/addMessage',(req,res)=>{
    console.log(req.body);
    const body = Object.assign({},req.body,{
        date: new Date()
    });
    console.log(db.collection('messages'));
    db.collection('messages').insertOne(body);
    res.json({status:"succeeded!!!!!!!!"});
});

router.get('/getMessages',(req,res)=>{
    db.collection('messages').find().toArray((error,result) => {
    res.json(result);
        // client.close();
    });
});

router.delete('/del',(req,res) => {
    db.collection('messages').deleteMany();
    res.json({status:"You delete all the messages"});
});

router.get('/getMessages/:index',(req,res)=>{

    const index = req.params.index;
    db.collection('messages').findOne({_id:ObjectId(index)})
        .then(result => {
            if(result) {
                console.log(`Successfully found document: ${result}.`)
            } else {
                console.log("No document matches the provided query.")
            }
            res.send(result);
        })
        .catch(err => console.error(`Failed to find document: ${err}`))  
});

router.delete('/del/:index',(req,res) => {

    const index = req.params.index;
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
});

router.put('/changeMessage/:index',(req,res) => {
    console.log('receivddded');
    const body = Object.assign({},req.body,{
        date: new Date()
    });
    console.log('==============');
    console.log(body.fromname);
    console.log('==============');
    const index = req.params.index;
    const update = {
        "$set": {
          "fromname": body.fromname,
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
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Expresees' });
});

module.exports = router;

