var express = require('express');
var router = express.Router();

router.get("/" , (req ,res ) =>{
   res.cookie("age" , 25);
   res.cookie("name" , 33);
   res.render("index");
});


router.get("/read" , function (req ,res ){
  console.log (req.cookies.age );
  res.send("check");
});

router.get("/delete" , function (req , res ){
   res.clearCookie("age");
   res.send("clea ho gya");
});

module.exports = router;
