var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var messageArray = [{
      fromname: 'LGY',
      toname: 'YGL',
      category : 'A',
      textcontent : 'Hello!YGL!',
      date : 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
    },{
      fromname: 'LGY',
      toname: 'ABX',
      category : 'B',
      textcontent : 'Hello!ABX!',
      date : 'Mon Jun 06 2019 01:46:51 GMT-0700 (PDT)'
    },{
      fromname: 'LGY',
      toname: 'SJAK',
      category : 'C22222',
      textcontent : 'Hello!SJAK',
      date : 'Mon Jun 04 2019 01:46:51 GMT-0700 (PDT)'
    }]

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/addMessage',(req,res)=>{
  const body = Object.assign({},req.body,{
    date: new Date()
  });
  console.log(body);
  // console.log(res);
  messageArray = [...messageArray,body];
  console.log(messageArray.length);
  res.json({status:"succeeded"});
});

app.get('/getMessages',(req,res)=>{
  res.json(messageArray);
});

app.get('/getMessages/:index',(req,res)=>{
  // todo
  const index = req.params.index;
  console.log(index);
  console.log(messageArray[index]);
  res.send(messageArray[index]);
});

app.delete('/del',(req,res) => {
  messageArray = [];
  res.json({status:"You delete all the messages"});
});

app.delete('/del/:index',(req,res) => {
  console.log("del by index called");
  const toDelIndex = req.params.index;
  messageArray.splice(toDelIndex,1);
  console.log(messageArray);
  res.json({status:"You delete one message of index "+ toDelIndex});
});

app.put('/changeMessage/:index',(req,res) => {
  console.log('receivddded');
  const body = Object.assign({},req.body,{
    date: new Date()
  });
  console.log(body);
  const toChangeIndex = req.params.index;
  console.log(toChangeIndex);
  messageArray.splice(toChangeIndex,1,body);
  console.log(messageArray);
  res.json({status:"You change the message of index "+ toChangeIndex});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
