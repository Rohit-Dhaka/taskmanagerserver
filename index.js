const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000
const ConnectDb = require('./db/Connect.js')
const routes = require('./routes/index.js')



app.use(express.json())
app.use(cors())
app.use('/api/v1' ,routes)





ConnectDb();
app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})