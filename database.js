var mongodb = require('mongodb');
var database;
//db 접속

module.exports = (function () {

 mongodb.MongoClient.connect('mongodb://heroku_wxklp90m:1o9th8rl3ij7v1dbkffb9pbrqe@ds011732.mlab.com:11732/heroku_wxklp90m',function(e,db)
{   
        if (e) {console.log(e);return}
            else {console.log('db success');}
                database = db; // 밖에서도 db 커서에 접근할 수 있도록


}   

)    

 return database
}) ()
