const express =require('express')

const mongoose=require('mongoose')

const url ='mongodb+srv://raiyan:hello@cluster0.lszds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app=express()

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true })

const con=mongoose.connection

app.use(express.json())

con.on('open',function(){
     console.log('connected....')
})

const studentRouter =require('./routers/student')
app.use('/students',studentRouter)
app.listen(9000,function(){
      console.log("Server started")

})