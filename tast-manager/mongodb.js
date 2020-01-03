const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'tast-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, ( error, client ) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('user').findOne({ _id: ObjectID('5e0da62bbc61114e6c91df4b') }, (e, user) => {
  //   if (e) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(user)
  // })

  // db.collection('user').find({ age: 27 }).toArray(( error, users ) => {
  //   console.log(users)
  // })

  db.collection('tasks').updateMany({
    completed: true
  }, {
    $set: {
      completed: false
    }
  }).then(result => {
    console.log(result.result)
    console.log(result.modifiedCount)
  }).catch(error => {
    console.log(error)
  })
})