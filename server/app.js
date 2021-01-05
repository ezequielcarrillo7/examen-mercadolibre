const express = require('express')
const app = express()
const service = require('./Service/service')


require('dotenv').config()

app.get('/api/items/:id', (req, res) => {
    service.getItemInfo(req.params.id)
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        console.log(error)
        res.send(error)
    })
})

app.get('/api/items', (req, res) => {
    service.getListItem(req.query.q)
        .then(response => {   
            res.json(response)
        })
        .catch(error => {
            console.log(error)
            res.send(error)     
        })
})

const PORT = process.env.PORT  || 5000

app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`)
})