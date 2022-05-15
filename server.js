const express=require ('express')
const app=express()
const alert = require('alert-node')
const port=4000
const date_ob = new Date();
const hour = date_ob.getHours()
console.log(hour)

function requestTime(req, res, next){

    if ( hour <9 || hour>17|| date_ob.getDay()==0 || date_ob.getDay()==7 ){
        alert("we are closed")
    } 
    else
    next()
    
    }
    

app.get('/',requestTime, (req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})
app.get('/services',requestTime,(req,res)=>{
    res.sendFile(__dirname+'/public/services.html')

})
app.get('/contact',requestTime,(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')

})


app.listen(port,()=>{ console.log(`example ${port}`)})