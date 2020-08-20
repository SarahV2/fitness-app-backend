
const express = require('express');
const app=express();

const connect=require('./config/db')

connect()

app.use(express.json({extended:false}))
app.get('/',(req,res)=>{
    res.send('welcome!')
})

app.use('/api/users', require('./routes/api/users'))
app.use('/api/workouts', require('./routes/api/workouts'))


const port=process.env.PORT||5000
app.listen(port,()=>console.log(`Server is listening on port ${port}`))