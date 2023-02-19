const express = require("express")
const server = express()

const PORT = process.env.NODE_PORT || 5000

server.get("*", (req, res) => {
    res.send("<h1>All Oks!</h1>")
})

server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})