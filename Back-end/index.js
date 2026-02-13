const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.send("Arrivé super")
})
app.listen(3000, () => {
    console.log("Running port 3000")
})