const express = require ('express')

const config = require('./config/app')

const router = require('./router')

const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.use(cors())
app.use(router)
app.use(express.static(__dirname + '/public'))

const port = config.appPort

app.listen(port, ()=> {
    console.log(`server listening on port ${port}`);
})