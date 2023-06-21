const express = require('express');
const mongoose = require('mongoose');
const app = require('./src/app')
const config = require('./src/config/config');
const cors = require('cors');


( async () => {
  try {
     await mongoose.connect('mongodb://0.0.0.0:27017/test')
     console.log("DB CONNECTED !");

     app.on('error', (err) => {
      console.error("ERROR: ", err);
      throw err
     })

     const onListening = () => {
      console.log(`Listening on port ${config.PORT}`);
     }

     app.listen(8000, onListening)

  } catch (err) {
      console.error("ERROR: ", err)
      throw err
  }
})()
