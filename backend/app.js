const express=require('express')
const cors=require('cors')

const app=express()
app.use(cors())

app.get('/info',async(req,resp)=>{
    resp.json({name:"Monu"})
})

app.listen(9236,()=>{
    console.log("server started")
})