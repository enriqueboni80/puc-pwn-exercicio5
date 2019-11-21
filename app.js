const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

io.on('connection', (socket) => {
    socket.on('message', conteudo => {
        socket.broadcast.emit('message', conteudo)
    })
})

app.get('/', (req, res) => {
    res.render('index')
})

http.listen(3000, () => {
    console.log('Listening on port 3000')
})