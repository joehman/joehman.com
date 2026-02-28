const express = require('express')
const app = express()
const port = 3000

const publicpath = require('path').resolve('public')

function get(reqpath, filepath) {
    app.get(reqpath, (req, res) => {
        res.sendFile(filepath, { root: publicpath })
    })
}

app.use(express.static(publicpath))

get("/", 'home.html');

app.listen(port, () => {
    console.log('Server running on port ' + port);
})