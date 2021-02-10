const app = require("express").Router();
//IMPORT THE JSON DATA
const Regions = require('./json/Regions')
const Villes = require('./json/Villes')
app.get('/regions',(req,res)=>{
  res.json(Regions)
})
app.get('/villes',(req,res)=>{
  res.json(Villes)
})
app.get('/villes/:regionID',(req,res)=>{
  let _Villes = Villes.filter(ville=>ville.region === req.params.regionID)
  if(_Villes.length == 0 ){
    res.json({msg:'The region number is invalid'})
  }
  res.json(_Villes)
})
module.exports = app;
