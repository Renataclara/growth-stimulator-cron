
const express = require('express')
const cron = require('node-cron')
const cors = require('cors')
const firebase = require('firebase')
const app = express()

app.use(cors())

var config = {
   apiKey: "AIzaSyBfKDGkycQU0D_-bP7IFTnBrglwSvWf6tM",
   authDomain: "hazel-goal-178409.firebaseapp.com",
   databaseURL: "https://hazel-goal-178409.firebaseio.com",
   projectId: "hazel-goal-178409",
   storageBucket: "hazel-goal-178409.appspot.com",
   messagingSenderId: "968186368255"
 };

var firebaseapp = firebase.initializeApp(config)

var db = firebaseapp.database()

app.get('/start', (req, res) => {
  const ponies = [
    'https://mylittlepony.hasbro.com/images/pick_MLP_pinkiepie.png',
    'http://www.buildabear.com/public/images/initiatives/mlp/2017/sec-d-1-minty.png',
    'https://s3.freefoto.com/images/01/39/01_39_12_web.jpg'
  ]
  let index = 0
  res.send(true)
  let pony = cron.schedule('*/10 * * * * *', () => {
    console.log('pony', index)
    db.ref('pony').set({
      phase: index,
      src: ponies[index]
    })
    index++

    if (index >= ponies.length)
      pony.stop()
  })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('siapppp')
})
