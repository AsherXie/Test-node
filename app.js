const express = require('express')
const fs = require('fs')

const app = express()

app.get('/',(req,res)=>{
    // res.end('3131')
    res.sendFile(`${__dirname}/src/index.html`);
})

app.listen(80)