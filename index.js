const express = require('express');
const app = express();

//use proxy serve rto redirect the incoming request
const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer({});

//redirect to the student micro-service
app.use('/student', (req, res) => {
    console.log("INSIDE API GATEWAY STUDENT ROUTE")
    proxy.web(req,res, {target:'http://184.73.78.40:5002'});
})

//redirect to the teacher micro-service
app.use('/teacher', (req, res) => {
    console.log("INSIDE API GATEWAY TEACHER ROUTE")
    proxy.web(req,res, {target:'http://3.83.177.15:5003'});
})
// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(4007, () => {
    console.log('EXPRESS Server Started at Port No: 4007')})








    
