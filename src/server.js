// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
// iniciando o express
const server =  express()
server
// utilizar body do req
.use(express.urlencoded({ extended: true }))
// utilizando os arquivos estaticos
.use(express.static('public'))
// configurar tempate  engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
// criar uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)
// ligar o servidor
server.listen(5000)