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
var port = process.env.PORT||5000
app.listen(port,function(){
      console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);

})