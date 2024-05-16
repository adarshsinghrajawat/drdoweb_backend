var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')

/* GET users listing. */
router.post('/submit_employee', function(req, res, next) {
  try{ 
  pool.query('insert into employee (employeename) values(?)',[req.body.employeename],function(error,result){

    if(error)
    {   
         res.status(200).json({status:false,message:'Database Error, Please Contact database admin'})
         console.log(error);
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

  router.get('/display_all_promotion', function(req, res, next) {
    try{ 
    pool.query('select * from promotions',function(error,result){
  
      if(error)
      {
           res.status(200).json({status:false,message:'Database Error, Please Contact database admin'})
      }
      else
      {
        res.status(200).json({data:result,status:true,message:'Success'})
      }
     })
    }
    catch(e)
    {
      res.status(200).json({status:false,message:'Server Error....'})
  
    }
    });

    router.post('/submit_employeedetails', function(req, res, next) {
        try{ 
        pool.query('insert into employeedetails (code,employeecode,employeename,department,designation) values(?,?,?,?,?)',[req.body.code,req.body.employeecode,req.body.employeename,req.body.department,req.body.designation],function(error,result){
         
          if(error)
          {console.log(error)
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

        router.post('/submit_issue', function(req, res, next) {
            try{ 
            pool.query('insert into issue (issuedate,issueto,returndate,accessionnumber,returnby,rby) values(?,?,?,?,?,?)',[req.body.issuedate,req.body.issueto,req.body.returndate,req.body.accessionnumber,req.body.returnby,req.body.rby],function(error,result){
             
              if(error)
              {console.log(error)
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




