var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')

/* GET users listing. */
router.post('/submit_promotion', function(req, res, next) {
  try{ 
  pool.query('insert into promotions (employeecode,employeename,previouspost,promotedpost,promotiondate) values(?,?,?,?)',[req.body.employeecode,req.body.employeename,req.body.previouspost,req.body.promotedpost,req.body.promotiondate],function(error,result){

    if(error)
    {
         res.status(200).json({status:false,message:'Database Error, Please Contact database admin'})
    }
    else
    {
      res.status(200).json({status:true,message:'Promotion Added Successfully'})
    }
   })
  }
  catch(e)
  {
    res.status(200).json({status:false,message:'Server Error....'})

  }
  });
  
  module.exports = router;