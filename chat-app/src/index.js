const http = require('http')
const path = require('path')
const express = require('express')
const socket = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socket(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let message = 'default'

io.on('connect', (socket) => {
  console.log('New Websocket connection')
  socket.emit('messageUpdated', 'Welcome!')
  socket.broadcast.emit('messageUpdated', 'A new user has joined!')

  socket.on('message', (messge, callback) => {
    io.emit('messageUpdated', messge)
    callback()
  })

  socket.on('sendLocation', (coords, callback) => {
    if (!coords.latitude || !coords.longitude) {
      return callback('position is indefined')
    }
    io.emit('messageUpdated', `https://google.com/maps/@${coords.latitude},${coords.longitude},15z`)
    callback()
  })

  socket.on('disconnect', () => {
    io.emit('messageUpdated', 'A user has left!')
  })
})

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})