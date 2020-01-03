const request = require('request')

const url = 'https://api.darksky.net/forecast/d0074e4a1ffcea10a3b2d4d734e3b798/37.8267,-122.4233'

request({ url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service')
  } else {
    console.log(response.body.currently)
  }
  
})

const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1IjoibGl2ZXBvd2VyMDgxNSIsImEiOiJjazRudnl0Nmwxd3VlM2lxczAzYmFzeHVvIn0.DkFDtqpy0N6HkBPbSXChTw'

// request({ url: geocodingURL, json: true }, (error, response) => {
//   const latitude = response.body.features[0].center[1]
//   const longitude = response.body.features[0].center[0]

//   console.log('latitude:', latitude)
//   console.log('longitude:', longitude)
// })
