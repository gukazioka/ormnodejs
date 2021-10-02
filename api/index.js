const express = require('express')

const app = express()

app.use(express.json())

const port = 3000

app.use('/', (req,res) => res.status(200).send('Servidor funcionando'))

app.listen(port, () =>{
    console.log("Servidor está rodando na porta 3000")
})

module.exports = app