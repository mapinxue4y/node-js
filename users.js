var express = require('express');
var router = express.Router();
const mongodb = require('mongodb').MongoClient;
let url = 'mongodb://127.0.0.1:27017';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool',(req,res,next)=>{
  res.send('coolyemain');
});

router.get('/login',(req,res,next)=>{
  res.render('login',{title:'login'});
  //res.send('developmental login');
});
var flag =1;
router.post('/login/sendId',(req,res,next)=>{
  //console.log(req.params);
  //console.log(req.method);
  //console.log(req.body);
  var body =JSON.stringify(req.body);
  var uinfo = JSON.parse(body);
  console.log(uinfo);
  mongodb.connect(url,(error,result)=>{
    if(error)throw error;
    var dblocal = result.db("local");
    dblocal.collection('usersinfo').find(uinfo).toArray((error,res)=>{
      if(error)throw error;
      console.log(res);
      //console.log(typeof(res));
      //console.log(JSON.stringify(res)=='[]')
      if(JSON.stringify(res)==='[]')
        {flag = 0;
        //console.log(flag);
      }
      //登录验证
      //若res为空，则说明没有注册或密码错误，直接返回密码错误
      //若存在数据，则说明已经注册和密码正确
      result.close();
    }); 
  }); 
  console.log(flag);
  if(flag==0)
    {res.send('0');}
  else{
    console.log(flag);
    res.send('登录成功');}
});
router.get('/signin',(req,res,next)=>{
  res.render('signin',{title:'signin'});
});
router.post('/signin/sendId',(req,res,next)=>{
  console.log(req.body);
  mongodb.connect(url,(error,result)=>{
    //先查重，后注册。
    if(error)throw error;
    var dblocal = result.db("local");
    dblocal.collection('usersinfo').insertOne(req.body,(error,res)=>{
      if(error)throw error;
      console.log('插入成功');
      result.close();
    });
  });
  res.send('注册成功');
});

module.exports = router;
