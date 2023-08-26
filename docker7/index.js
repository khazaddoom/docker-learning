const mongoose = require('mongoose')

mongoose
    .connect("mongodb://localhost:27017/facts")
    .then(_ => {
        console.log("Connected!")
    })
    .catch(error => {
        console.log("Something went wrong!")
        console.error(error)
    })