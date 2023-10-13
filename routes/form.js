const exp=require("express")

const router=exp.Router()

const fm=require("../model/form_db");
const { log } = require("console");

router.post("/submit",async(req,res)=>{

    var inscat={
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.number,
        date:req.body.date
    }; 
    await fm.create(inscat)

   res.json({msg:"server conected oh my god"});
});

router.get("/fmd",async(req,res)=>{
   var data=await fm.find();
   res.json(data);
});


router.post("/del",async(req,res)=>{
    var id=req.body.id;

    await fm.findByIdAndDelete(id);
    res.json({msg:"deleted"});
    });

module.exports=router;