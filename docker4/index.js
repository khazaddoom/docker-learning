const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get("*", (request, response) => {
    response.send("<h1>Ganesh</h1>")
})

app.listen(PORT, (SERVER_PORT = PORT) => {
    console.log(`Server listening on PORT:${SERVER_PORT}...`)
})