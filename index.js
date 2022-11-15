//Import módulo Express (Framework para servidor em NodeJS)
const express = require("express")
//Import do módulo Path - para tornar púlico o acesso à pasta Public
const path = require('path')
//Instância do express
const app = express()
//Variável para porta do servidor
const port = process.env.PORT || 3030

// Configuração View Engine EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//Middware - EJS
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Rotas Estáticas
app.use(express.static(__dirname + "/public"))

// Rotas Dinâmicas
app.get('/', (req, res) => {
    res.render("index")
})

//Abrindo um Servidor
app.listen(port, () => {
    console.log('Servidor rodando na porta: ' + port)
})