const express =require('express')

const student=require('../models/students')

const router= express.Router()

router.get('/',async(req,res)=>{

    try{
                 
           const stud= await student.find()
                 
            res.json(stud)
    }catch(err){
        res.send("Error"+ err)
    }
})

router.post('/',async(req,res)=>{

      const student1 = new student({

          name:req.body.name,
          branch:req.body.branch,
          admission_date:req.body.admission_date

      })
      try{
              
        const s1=await student1.save()
        res.json(s1)


      }catch(err){
          res.send(err)
      }

})
router.get('/:id',async(req,res)=>{

    try{

           const stud= await student.findById(req.params.id)
            res.json(stud)
    }catch(err){
        res.send("Error"+ err)
    }
})

router.patch('/:id',async(req,res)=>{

    try{

            
       const stud2= await student.findById(req.params.id)
                 
            if(req.body.name){

                stud2.name=req.body.name
                
                
            }
            else if(req.body.branch){
                        stud2.branch=req.body.branch
                        
            }
            else if(req.body.admission_date){
                  stud2.admission_date=req.body.admission_date
                  

            } 
            stud2.save()
            res.send(stud2)
       

    }catch(err){

        res.send("Error"+err)
    }
})

router.delete('/:id', (req, res) =>  {
    
         
                 var stud=req.params.id;
                 student.findOneAndRemove({_id: stud},function(err){

                    if(err){
                        console.log(err);
                        return res.status(500).send()
                    }
                    return res.status(200).send();
                 })
   })
   

module.exports=router

