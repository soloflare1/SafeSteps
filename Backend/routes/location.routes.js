
const router = require('express').Router();
const Location = require('../models/Location');

// POST location
router.post('/', async (req,res)=>{
  try{
    const data = new Location(req.body);
    await data.save();
    res.json({success:true});
  }catch(err){
    res.status(500).json({success:false,error:err.message});
  }
});

// GET locations
router.get('/', async (req,res)=>{
  const data = await Location.find().sort({_id:-1}).limit(100);
  res.json(data);
});

module.exports = router;
