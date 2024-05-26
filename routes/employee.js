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
            router.post('/submit_book', function(req, res, next) {
              try{ 
              pool.query('insert into book (sno, d, acno, rb, author,title1, title2, title3, subject1, subject2,edition, place, publisher, year, pages,volume, source1, source2, billno, billdt,cost, forncost, bokkno) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[req.body.sno, req.body.d, req.body.acno, req.body.rb, req.body.author,req.body.title1, req.body.title2, req.body.title3, req.body.subject1, req.body.subject2,req.body.edition, req.body.place, req.body.publisher, req.body.year, req.body.pages,req.body.volume, req.body.source1, req.body.source2, req.body.billno, req.body.billdt,req.body.cost, req.body.forncost, req.body.bokkno],function(error,result){
               
                if(error)
                {console.log(error)
                     res.status(200).json({status:false,message:'Database Error, Please Contact database admin'})
                }
                else
                {
                  res.status(200).json({status:true,message:'Book Added Successfully'})
                }
               })
              }
              catch(e)
              {
                res.status(200).json({status:false,message:'Server Error....'})
            
              }
              });

              router.post('/edit_book_data', function(req, res, next) {
                try{ 
                pool.query('update book set sno=?, d=?, acno=?, rb=?, author=?,title1=?, title2=?, title3=?, subject1=?, subject2=?,edition=?, place=?, publisher=?, year=?, pages=?,volume=?, source1=?, source2=?, billno=?, billdt=?,cost=?, forncost=?, bokkno=? where bookid=?',[req.body.sno, req.body.d, req.body.acno, req.body.rb, req.body.author,req.body.title1, req.body.title2, req.body.title3, req.body.subject1, req.body.subject2,req.body.edition, req.body.place, req.body.publisher, req.body.year, req.body.pages,req.body.volume, req.body.source1, req.body.source2, req.body.billno, req.body.billdt,req.body.cost, req.body.forncost, req.body.bokkno, req.body.bookid],function(error,result){
                 
                  if(error)
                  {console.log(error)
                       res.status(200).json({status:false,message:'Database Error, Please Contact database admin'})
                  }
                  else
                  {
                    res.status(200).json({status:true,message:'Book Updated Successfully'})
                  }
                 })
                }
                catch(e)
                {
                  res.status(200).json({status:false,message:'Server Error....'})
              
                }
                });

                router.post('/delete_book_data', function(req, res, next) {
                  try{ 
                  pool.query('delete from book where bookid=?',[req.body.bookid],function(error,result){
                   
                    if(error)
                    {console.log(error)
                         res.status(200).json({status:false,message:'Database Error, Please Contact database admin'})
                    }
                    else
                    {
                      res.status(200).json({status:true,message:'Book Deleted Successfully'})
                    }
                   })
                  }
                  catch(e)
                  {
                    res.status(200).json({status:false,message:'Server Error....'})
                
                  }
                  });


              router.get('/display_all_book', function(req, res, next) {
                try{ 
                pool.query('select * from book',function(error,result){
              
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

                
              router.get('/display_all_bookdetail', function(req, res, next) {
                try{ 
                pool.query('select * from bookdetail',function(error,result){
              
                  if(error)
                  {console.log(error)
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
                //  router.post('/edit_book_data', function(req, res, next) {
                // try{ 
                // pool.query('update book set sno=?, d=?, acno=?, rb=?, author=?,title1=?, title2=?, title3=?, subject1=?, subject2=?,edition=?, place=?, publisher=?, year=?, pages=?,volume=?, source1=?, source2=?, billno=?, billdt=?,cost=?, forncost=?, bokkno=? where bookid=?',[req.body.sno, req.body.d, req.body.acno, req.body.rb, req.body.author,req.body.title1, req.body.title2, req.body.title3, req.body.subject1, req.body.subject2,req.body.edition, req.body.place, req.body.publisher, req.body.year, req.body.pages,req.body.volume, req.body.source1, req.body.source2, req.body.billno, req.body.billdt,req.body.cost, req.body.forncost, req.body.bokkno, req.body.bookid],function(error,result){
                 
                //   if(error)
                //   {console.log(error)
                //        res.status(200).json({status:false,message:'Database Error, Please Contact database admin'})
                //   }
                //   else
                //   {
                //     res.status(200).json({status:true,message:'Book Updated Successfully'})
                //   }
                //  })
                // }
                // catch(e)
                // {
                //   res.status(200).json({status:false,message:'Server Error....'})
              
                // }
                // });

                router.post('/submit_bookdetail', function(req, res, next) {
                  try{ 
                  pool.query('insert into bookdetail (lno, author, title1, title2, title3, edition, place, publisher, volume, year, cost, forncost, qty, noremd, rem, crvno, status, itemcode) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[req.body.lno, req.body.author, req.body.title1, req.body.title2, req.body.title3,req.body.edition, req.body.place, req.body.publisher, req.body.volume, req.body.year,req.body.cost, req.body.forncost, req.body.qty, req.body.noremd, req.body.rem,req.body.crvno, req.body.status, req.body.itemcode],function(error,result){
                   
                    if(error)
                    {console.log(error)
                         res.status(200).json({status:false,message:'Database Error, Please Contact database admin'})
                    }
                    else
                    {
                      res.status(200).json({status:true,message:'Book Added Successfully'})
                    }
                   })
                  }
                  catch(e)
                  {
                    res.status(200).json({status:false,message:'Server Error....'})
                
                  }
                  });

                  router.post('/edit_bookdetail', function(req, res, next) {
                    try{ 
                    pool.query('update bookdetail set lno=?, author=?, title1=?, title2=?, title3=?, edition=?, place=?, publisher=?, volume=?, year=?, cost=?, forncost=?, qty=?, noremd=?, rem=?, crvno=?, status=?, itemcode=? where bookdetailid=?',[req.body.lno, req.body.author, req.body.title1, req.body.title2, req.body.title3,req.body.edition, req.body.place, req.body.publisher, req.body.volume, req.body.year,req.body.cost, req.body.forncost, req.body.qty, req.body.noremd, req.body.rem,req.body.crvno, req.body.status, req.body.itemcode, req.body.bookdetailid],function(error,result){
                     
                      if(error)
                      {console.log(error)
                           res.status(200).json({status:false,message:'Database Error, Please Contact database admin'})
                      }
                      else
                      {
                        res.status(200).json({status:true,message:'Book Added Successfully'})
                      }
                     })
                    }
                    catch(e)
                    {
                      res.status(200).json({status:false,message:'Server Error....'})
                  
                    }
                    });
  
  module.exports = router;