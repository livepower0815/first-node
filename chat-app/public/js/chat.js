const socket = io('http://localhost:3000')

socket.on('messageUpdated', (message) => {
  console.log('message had changed:', message)
})

const messageInput = document.querySelector('#messageInput')
const messageButton = document.querySelector('#send')
const locationButton = document.querySelector('#location')

messageButton.addEventListener('click', () => {
  messageButton.setAttribute('disabled', 'disabled')
  socket.emit('message', messageInput.value, () => {
    messageButton.removeAttribute('disabled')
  })
})

locationButton.addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocation is not support by your browser')
  }
  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit('sendLocation', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }, (e) => {
      if (e) {
        return console.log(e)
      }
      console.log('sending coords is successed')
    })
  },(error) => {
    console.log(error)
    socket.emit('sendLocation', {}, (e) => {
      if (e) {
        return console.log(e)
      }
      console.log('sending coords is successed')
    })
  })
})