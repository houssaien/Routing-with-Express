const express = require('express')
const hbs =require('hbs')
const app = express() //const app objet contient plusieurs methodes


addRequestDate = (req, res, next) => {

    let requestAt = new Date()
    let hours = requestAt.getHours()
    if((hours > 8)  && (hours < 17))

    next()

else{

 res.sendFile(__dirname + '/public/close.html')

}
}



app.get('/home', addRequestDate ,(req, res) => {
    res.sendFile(__dirname + '/public/index.html')
}) 

app.get('/service', addRequestDate ,(req, res) => {
    res.sendFile(__dirname + '/public/service.html')
})


app.get('/contact', addRequestDate ,(req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})


app.listen(3000, (err)=>{
    if(err) console.log("server not runing")
    else console.log("server runing in port 3000")
} )
