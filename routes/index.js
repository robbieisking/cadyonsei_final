var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var database;


/* GET home page. */


router.get('/', function(req, res, next) {
  mongodb.MongoClient.connect('mongodb://heroku_wxklp90m:1o9th8rl3ij7v1dbkffb9pbrqe@ds011732.mlab.com:11732/heroku_wxklp90m',function(e,db)
      {
                  if (e) {console.log(e);return}
                          else {console.log('success');}
                                  database = db; // 밖에서도 db 커서에 접근할 수 있도록
                                  db.collection('proj').find().toArray(function(err,d){
                                      if (err) {console.log(err); return}
                                      else {
                                        res.render('hello',{'proj_list':d}) }



                                  })

                                          }

                                          )


});

router.get('/proj', function(req,res,next) {
  database.collection('proj').find({'proj_name':req.query.projname}).toArray(function(err,d){
      if (err) {console.log(err); return}
      else {res.render('index',{'glob':d,'title':req.query.projname}) }
})
} )

router.post('/make', function(req,res,next) {
    database.collection('proj').insert({'proj_name':req.body.proj_name,'glob':null})
    res.redirect('/')
})

router.post('/save', function(req,res,next) {
    database.collection('proj').update({'proj_name':req.body.proj_name},{'glob':'edited'})
})

module.exports = router;
