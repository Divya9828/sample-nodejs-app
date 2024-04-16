var exp=require('express');
var use=exp();

use.get('/',(req,res)=>{
    res.json("Iam Nodejs User")
})

use.listen(3000);