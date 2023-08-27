const mongoose = require('mongoose')

mongoose
    .connect("mongodb://mongo-db:27017/facts")
    .then(_ => {
        console.log("Connected!")
    })
    .catch(error => {
        console.log("Something went wrong!")
        console.error(error)
    })